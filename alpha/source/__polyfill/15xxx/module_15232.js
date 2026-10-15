// Module ID: 15232
// Function ID: 15233
// Dependencies: []

// Module 15232
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
