import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Container, Table } from 'react-bootstrap';

import KmpSettings from './components/kmp_settings';
import { delay, rightRotate } from '../../utils';



export default function KMP() {

    const [inputStr, setInputStr] = useState("");
    const [searchStr, setSearchStr] = useState("");

    const [kInLPSCreate, setkInLPSCreate] = useState(0);
    const [iInLpsCreate, setiInLpsCreate] = useState(0);

    const [createLPSstatusMessage, setCreateLPSstatusMessage] = useState("Not Started Yet !");
    const [searchExecutionMessage, setSearchExecutionMessage] = useState("Not Started Yet !");

    const [running, toggleRunning] = useState(false);
    const [step1running, setStep1running] = useState(false);
    const [step2running, setStep2running] = useState(false);
    const [finished, setFinished] = useState(false);

    const [lps, setLps] = useState([]);

    const [maxPrefixLengthInExe, setMaxPrefixLengthInExe] = useState(0);
    const [iInExe, setIinExe] = useState(0);

    const [occurrences, setOccurences] = useState([]);

    const [paddedPattern, setPaddedPattern] = useState([]);

    const [lpsLookupIndex, setLpsLookupIndex] = useState();


    const [animationDelay, setAnimationDelay] = useState(1000);

    const [hoveredRange, setHoveredRange] = useState([]);

    const [paused, setPaused] = useState(false);


    useEffect(() => {
        const padLen = (inputStr.length - searchStr.length) < 0 ? 0 : (inputStr.length - searchStr.length);
        const padded = Array.from(searchStr).concat(Array(padLen).fill('')).map((val, i) => { return {val: val, i: i} });
        setPaddedPattern(padded);
        setFinished(false);

        setOccurences([]);

    }, [ searchStr, inputStr]);

    useEffect(() => {
        // Cleanup
        setLpsLookupIndex(undefined);
        setMaxPrefixLengthInExe(0);
        setIinExe(0);
        setPaused(false);
        //setOccurences([]);
        

        const padLen = (inputStr.length - searchStr.length) < 0 ? 0 : (inputStr.length - searchStr.length);
        const padded = Array.from(searchStr).concat(Array(padLen).fill('')).map((val, i) => { return {val: val, i: i} });
        setPaddedPattern(padded);
        
    }, [running]);

    const onPause = () => {
        console.log("Heererere");
        console.log(paused);
        setPaused(!paused);
        console.log(paused);
    }


    const startHighlightResult = (occIndex) => {
        setHoveredRange(occIndex);
    };

    const cleanHighlightResult = () => {
        setHoveredRange([]);
    };

    const shouldHighlight = (i) => {
        if (hoveredRange.length == 2)
            return (i >= hoveredRange[0] && i <= hoveredRange[1]);

        return false;
    };

    const getHighlightColor = (i) => {
        if (finished && shouldHighlight(i)) {
            return '#b3ccaf';
        }

        return (step2running && (i === iInExe)) ? 'lightgreen' : 'white';
    };
    
    const createLpsOnSearchString = async () => {
        
        setCreateLPSstatusMessage("Stared...");

        const result = [];
        const s = searchStr;

        result[0] = 0; 
        let k = 0; setkInLPSCreate(0);

        for (let i = 1; i < s.length; i++) {
            setiInLpsCreate(i);


            while (k > 0 && s[i] !== s[k]) {
                setCreateLPSstatusMessage(`Mismatch! Consulting LPS table....Updating LPS [ Index ] = ${result[k - 1]}`);
                k = result[k - 1];
                setkInLPSCreate(k+0);

                await delay(animationDelay / 100);
            }

            if (s[k] === s[i]) { // we've found the longest prefix - case 1
                setCreateLPSstatusMessage("Matched! Incrementing Left Value")
                k++;
                setkInLPSCreate(k+0);
                
            }

            result[i] = k; // store this result in the array
            setLps([...result]);

            await delay(animationDelay);
        }
        
        return result;
    };

    const executeSearch = async () => {
        setStep1running(true);
        const prefix = await createLpsOnSearchString();
        setStep1running(false);

        setStep2running(true);

        let maxPrefixLength = 0;

        const s = searchStr;
        const text = inputStr;
        const occ = [];
        
        for (let i = 0; i < text.length; i++) {
            setLpsLookupIndex(undefined);
            setIinExe(i+0);
            setMaxPrefixLengthInExe(maxPrefixLength);
            setPaddedPattern(rightRotate(paddedPattern, i - maxPrefixLength));

            //(maxPrefixLength > 0) ? setMaxPrefixLengthInExe(maxPrefixLength+0) : setMaxPrefixLengthInExe(1);

            if ((text.length - i) < (s.length - maxPrefixLength)) {
                setStep2running(false);
                return -1;
            }

            while (maxPrefixLength > 0 && text[i] !== s[maxPrefixLength]) {
                

                setSearchExecutionMessage(`Mismatch! Hopping, Matched Prefix Length = LPS [ ${maxPrefixLength - 1} ] = ${prefix[maxPrefixLength - 1]}`);
                setLpsLookupIndex(maxPrefixLength-1);

                maxPrefixLength = prefix[maxPrefixLength - 1];
                
                await delay((7.0 / 10) * animationDelay);
                //setLpsLookupIndex(undefined);
            }

            // If a match happened, increase the length of the maximum-length
            // prefix.
            if (s[maxPrefixLength] === text[i]) {
                setSearchExecutionMessage(`Matched! incrementing Maximum Prefix Length`);
                maxPrefixLength++;
            } else {
                //shiftPaddedArray(i, i+1);
                setSearchExecutionMessage(`Mismatch! `);
            }

            // If the prefix length is the same length as the pattern string, it
            // means that we have found a matching substring in the text.

            if (maxPrefixLength === s.length) {
                // We can return this value or perform this operation.
                let idx = i - s.length + 1;
                
                // Get the previous maximum-length prefix and continue search.
                setSearchExecutionMessage(`Pattern Matched! Get Previous Max-Length Prefix and look for further occurrences...`);
                setLpsLookupIndex(maxPrefixLength - 1);


                maxPrefixLength = prefix[maxPrefixLength - 1];
                //shiftPaddedArray(maxPrefixLength, i);
                //await delay((7.0 / 10) * animationDelay);

                const occIndex = [idx, (idx + s.length - 1)];
                occ.push(occIndex);

                setOccurences([...occ])



            } 

            await delay(animationDelay);
        }
        setStep2running(false);
        return -1;
    };

    const getBgColorPattI = (i) => {

        if (!step1running) {
            return 'white';
        }

        if (i === kInLPSCreate - 1) {
            return 'lightblue';
        }

        if (i === kInLPSCreate) {
            return 'lightgreen';
        } 

        if (i === iInLpsCreate) {
            return 'yellow';
        }
        
    };

    const getBorderLPSI = (i) => {
        if (step2running) {
            if (lpsLookupIndex === i) {
                return 'red';
            }
        }

        if (!step1running) {
            return;
        }

        if (i === iInLpsCreate) {
            return 'yellow';
        }

        //return 'yellow';
    }

    const getBorderIndex = (i) => {
        if (!step1running) {
            return;
        }

        if (i === kInLPSCreate) {
            return 'lightgreen';
        }
    }

    const onStart = async () => {
        if (!(inputStr && searchStr && (inputStr.length >= searchStr.length))) {
            alert('Input Not Valid!')
            return;
        }

        setFinished(false);
        toggleRunning(true);
        await executeSearch();
        toggleRunning(false);
        setFinished(true);
        
        
        
    };



    return (
        
        <Container className="parentContainer" fluid={true}>
            <h2>Knuth-Morris-Pratt Algorithm</h2>
            
            <hr />
            <KmpSettings 
                inputStr={inputStr} 
                setInputStr={setInputStr} 
                searchStr={searchStr} 
                setSearchStr={(val) => { setLps([]); setSearchStr(val); }} 
                animationDelay={animationDelay}
                setAnimationDelay={setAnimationDelay}
                running={running} 
                onStart={onStart}
            />
            <br />
            
            <div className="step1">
                <h4>Step 1</h4>
                <span>Creation of the LPS / PI table</span>
                
                <div>
                    
                    <br />
                    {
                        (step1running) ? <b>{createLPSstatusMessage}</b> : <b></b>
                    }
                    <br />
                </div>
                
                <Table striped bordered hover responsive size="sm">
                    <tbody>
                    <tr>
                    <td className="laling">
                        <b>Index</b>
                    </td>
                        {
                            Array.from(searchStr).map((ch, i) => 
                            
                            <td key={i} style={{ borderWidth: (step1running  && (i === kInLPSCreate)) ? '2px' : '', borderColor: getBorderIndex(i) }}>
                                <span>
                                    {i}
                                </span>
                            </td>)
                        }
                    </tr>
                    <tr>
                        <td className="laling">
                            <b>Pattern [ Index ]</b>
                        </td>
                        {
                            Array.from(searchStr).map((ch, i) => 
                            
                            <td key={i} style={{ backgroundColor: getBgColorPattI(i) }}>
                                <span>
                                    {ch}
                                </span>
                            </td>
                            )
                        }
                    </tr>
                    <tr>
                        <td className="laling"><b>LPS [ Index ]</b></td>
                        {
                            lps.map((val, i) => 
                                <td key={i}  style={{ borderWidth: (step1running && (i === iInLpsCreate)) || (step2running && (i === lpsLookupIndex)) ? '2px' : '', borderColor: getBorderLPSI(i) }}>
                                    {val}
                                </td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>
            </div>

            <br />
            <div className="step2" style={{ display: step2running || finished ? 'block' : 'none' }}> 
                <h4>Step 2</h4>
                <span>Search in the input string</span>

                <div>
                   
                    <br />
                    {
                        (step2running) ? <b>{searchExecutionMessage}</b> : <b></b>
                    }
                    <br />
                    {
                        (step2running || finished) ? 
                        <div>
                            <b>Num of Occurrences: {occurrences.length}</b>
                            <Table bordered striped responsive size="sm">
                                <thead>
                                    <tr>
                                        <th colSpan={occurrences.length}>
                                            Occurrences of Search String in Input String {(finished) ? <span>&nbsp; (Hover Now)</span> : <span></span>}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    {
                                        occurrences.map((occIndex, i) => 
                                            <td 
                                                key={i}
                                                style={{ backgroundColor: (occIndex === hoveredRange) ? '#daebd8' : '' }}
                                                onMouseEnter={() => startHighlightResult(occIndex)} 
                                                onMouseLeave={() => cleanHighlightResult()}
                                            >{occIndex.toString()}</td>
                                        )
                                    }
                                    </tr>
                                </tbody>
                            </Table>
                        </div> : <b></b>
                    }
                    <br />
                </div>

                <Table bordered responsive striped size="sm">
                    <tbody>
                    <tr>
                        {
                            Array.from(inputStr).map((ch, i) => 
                            
                            <td key={i}>
                                <span>
                                    {i}
                                </span>
                            </td>
                            )
                        }
                    </tr>
                    <tr>
                    {
                        Array.from(inputStr).map((ch, i) =>
                        <td key={i} style={{ backgroundColor: getHighlightColor(i)}}>
                            <span>
                                {ch}
                            </span>
                        </td>)
                    }
                    </tr>
                    <tr>
                    {
                        paddedPattern.map((ob, i) => 
                        <td key={i} style={{ backgroundColor: (step2running && (ob.i === maxPrefixLengthInExe) ) ? 'yellow' : 'white'}}>
                            <span>
                                {ob.val}
                            </span>
                        </td>)
                    }
                    </tr>
                    </tbody>
                </Table>
            </div>
            
        </Container>
        
    );
}