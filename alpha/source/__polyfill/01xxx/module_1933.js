// Module ID: 1933
// Function ID: 1934
// Dependencies: []
// Exports: cloneWorklet

// Module 1933
const f83031 = () => {

};
function worklet(arg0) {
  let fn = arg0;
  if (arg0 == null) {
    fn = f83031;
  }
  fn.__workletHash = Math.random();
  return fn;
}

export { worklet };
export const cloneWorklet = (__workletHash) => {
  if (typeof worklet === "function") {
    const fn = f83031;
    const _Math = Math;
    fn.__workletHash = Math.random();
    fn.__workletHash = __workletHash.__workletHash;
    if (undefined !== __workletHash.__closure) {
      const items = [];
      HermesBuiltin.arraySpread(items, __workletHash.__closure, 0);
      fn.__closure = items;
    }
    return fn;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
