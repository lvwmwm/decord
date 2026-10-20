// Module ID: 15378
// Function ID: 15379
// Dependencies: []

// Module 15378
let all = typeof document === "object";
if (typeof document === "object") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  let fn;
  if (undefined !== all) {
    fn = (fn) => typeof fn === "function" || fn === all;
  }
  module.exports = fn;
}
fn = (fn) => typeof fn === "function";
