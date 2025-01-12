/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      }
    } else {
      return fn(...args);
    }
  }
}
