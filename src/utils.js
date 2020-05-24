export function delay(ms){
    var ctr, rej, p = new Promise(function (resolve, reject) {
        ctr = setTimeout(resolve, ms);
        rej = reject;
    });
    p.cancel = function(){ clearTimeout(ctr); rej(Error("Cancelled"))};
    return p;
}

export function rightRotate(A, k) {
    const n = A.length;

    // construct an auxiliary array of size k and
    // fill it with last k elements of the input array
    const aux = Array(A.length).fill(null);

    for (let i = 0; i < k; i++) {
        aux[i] = A[n - k + i];
    }

    // shift the first 'n-k' elements of the input array to the end
    for (let i = n - k - 1; i >= 0; i--) {
        aux[i + k] = A[i];
    }

    return aux; 
}