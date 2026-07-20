// Module ID: 13126
// Function ID: 99470
// Name: all
// Dependencies: []

// Module 13126 (all)
let all = "object" === typeof document;
if (all) {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (arg0) => {
      let tmp = "function" === typeof arg0;
      if (!tmp) {
        tmp = arg0 === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (arg0) => "function" === typeof arg0;
