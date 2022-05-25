/**
 * Returns the nth fibonacci number using recursion and a cache.
 *
 * @param {Integer} n The nth fibonacci number to return
 * @returns The nth fibonacci number
 */
const rFibonacci = (n) => {
  // implement lru cache
  const cahce = {};

  const fib = (n) => {
    if (n == 0) return 0;
    if (n == 1) return 1;

    if (cahce[n] !== undefined) return cahce[n];

    const result = fib(n - 1) + fib(n - 2);
    cahce[n] = result;
    return result;
  };

  return fib(n);
};

/**
 * Returns the nth fiboanacci number using recursion without caching.
 *
 * @param {Integer} n The nth fibonacci number to return
 * @returns The nth fibonacci number
 */
const naiivRecursiveFibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return naiivRecursiveFibonacci(n - 1) + naiivRecursiveFibonacci(n - 2);
};

/**
 * Returns the nth fibonacci number.
 *
 * @param {Integer} n
 * @returns The nth fibonacci number
 */
const fibonacci = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    // a, b = b, a + b

    let temp = a;
    a = b;
    b = temp + b;
  }

  return a;
};

module.exports = { fibonacci };
