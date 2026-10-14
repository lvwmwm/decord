// Module ID: 14087
// Function ID: 14088
// Dependencies: []

// Module 14087
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
