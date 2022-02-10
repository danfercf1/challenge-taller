function changeMin(coins) {
  const n = coins.length;
  let i = 0;
  let k = 1;
  let aux = 0;
  let equals = false;
  for (k; k < n; k++) {
    for (i = 0; i < (n - k); i++) {
      if (coins[i] > coins[i + 1]) {
        aux = coins[i];
        coins[i] = coins[i + 1];
        coins[i + 1] = aux;
      }
    }
  }
  if (coins[0] === coins[coins.length - 1]) equals = true;
  
  coins.pop()
  
  const sumMins = coins.reduce((prev, current, eq) => {
  	return prev + current;
  }, 0);
  
  if (equals) return sumMins + 2;
  else return sumMins + 1;
}
