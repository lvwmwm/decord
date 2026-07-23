// Module ID: 638
// Function ID: 7337
// Name: shim
// Dependencies: []

// Module 638 (shim)
function shim(obj) {
  const items = [];
  for (const key10003 in arg0) {
    let tmp = key10003;
    let arr = items.push(key10003);
    continue;
  }
  return items;
}
let keys = shim;
if ("function" === typeof Object.keys) {
  const _Object = Object;
  keys = Object.keys;
}
keys.shim = shim;

export default keys;
