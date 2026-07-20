// Module ID: 571
// Function ID: 6940
// Name: add
// Dependencies: []
// Exports: add, clear, last, serialize

// Module 571 (add)
let closure_0 = [];
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/flux/LastFewActions.tsx");

export const add = function add(arg0) {
  let length;
  let arr = arr.push(arg0);
  if (arr.length > 10) {
    do {
      let tmp2 = closure_0;
      arr = closure_0.shift();
      let tmp4 = closure_0;
      length = closure_0.length;
    } while (length > 10);
  }
};
export function clear() {
  let closure_0 = [];
  return closure_0;
}
export const serialize = function serialize() {
  return arr.join(" -> ");
};
export const last = function last() {
  let tmp = null;
  if (arr.length > 0) {
    tmp = arr[closure_0.length - 1];
  }
  return tmp;
};
