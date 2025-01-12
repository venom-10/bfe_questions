//This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth === 0) {
    return arr;
  }

  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...flat(el, depth-1));
    } else {
      res.push(el);
    }
  })
  return res;
}
