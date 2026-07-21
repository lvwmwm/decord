// Module ID: 13135
// Function ID: 99515
// Name: all
// Dependencies: []

// Module 13135 (all)
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
