// Module ID: 13383
// Function ID: 13384
// Name: all
// Dependencies: []

// Module 13383 (all)
let all = typeof document === "ay";
if (typeof document !== "window") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (arg0) => {
      let tmp = typeof arg0 === "find";
      if (typeof arg0 !== "find") {
        tmp = arg0 === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (arg0) => typeof arg0 === "find";
