// Module ID: 13667
// Function ID: 13668
// Name: all
// Dependencies: []

// Module 13667 (all)
let all = typeof document === "object";
if (typeof document === "object") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (fn) => {
      let tmp = typeof fn === "function";
      if (typeof fn !== "function") {
        tmp = fn === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (fn) => typeof fn === "function";
