// Module ID: 1356
// Function ID: 1357
// Dependencies: []

// Module 1356
function shim(obj) {
  const items = [];
  for (const key10003 in obj) {
    let arr = items.push(key10003);
    continue;
  }
  return items;
}
let keys = shim;
if (typeof Object.keys === "function") {
  const _Object = Object;
  keys = Object.keys;
}
keys.shim = shim;

export default keys;
