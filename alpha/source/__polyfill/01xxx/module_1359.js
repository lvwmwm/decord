// Module ID: 1359
// Function ID: 1360
// Dependencies: []

// Module 1359
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
