// Module ID: 13133
// Function ID: 99493
// Name: all
// Dependencies: []

// Module 13133 (all)
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
