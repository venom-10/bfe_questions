// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  // if we are in wait time then do noting but reset the timer else run after wait time.
  let timer = null;
  return function(arg) {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => func.call(this, arg), wait);
    } else {
      timer = setTimeout(() => func.call(this, arg), wait);
    }
  }
}
