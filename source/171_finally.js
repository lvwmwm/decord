// Module ID: 171
// Function ID: 2518
// Name: finally
// Dependencies: [172]

// Module 171 (finally)
require("noop").prototype.finally = function(arg0) {
  let closure_0 = arg0;
  return this.then((arg0) => {
    const callback = arg0;
    const obj = callback(outer1_1[0]);
    return callback(outer1_1[0]).resolve(callback()).then(() => closure_0);
  }, (arg0) => {
    const callback = arg0;
    const obj = callback(outer1_1[0]);
    return callback(outer1_1[0]).resolve(callback()).then(() => {
      throw closure_0;
    });
  });
};

export { default } from "noop";
