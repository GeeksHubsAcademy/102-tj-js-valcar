function numPrimo(max) {
    var arr = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!arr[i]) {
            // i no ha sido marcado asi que es prime
            primes.push(i);
            for (j = i < 1; j <= max; j += i) {
                arr[j] = true;
            }
        }
    }
    return primes;
  }

module.exports = numPrimo;
