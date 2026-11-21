// Module ID: 1932
// Function ID: 1933
// Dependencies: []
// Exports: cloneWorklet

// Module 1932
const f82219 = () => {

};
function worklet(arg0) {
  let fn = arg0;
  if (arg0 == null) {
    fn = f82219;
  }
  fn.__workletHash = Math.random();
  return fn;
}

export { worklet };
export const cloneWorklet = (__workletHash) => {
  if (typeof worklet === "function") {
    const fn = f82219;
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
