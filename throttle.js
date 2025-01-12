/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  let cooling = false, lastArgs = null;
  return function(arg) {
    if (!cooling) {
      func.call(this, arg);
      cooling = true;
      setTimeout(() => {
        cooling = false;
        if (lastArgs !== null) {
          func.call(this, lastArgs);
          cooling = true;
          lastArgs = null;
          setTimeout(() => cooling = false, wait)
        }
      }, wait);
    } else {
      lastArgs = arg;
    }
  };
}

