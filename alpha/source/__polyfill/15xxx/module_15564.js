// Module ID: 15564
// Function ID: 15565
// Dependencies: []

// Module 15564
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
