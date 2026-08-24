// Module ID: 1020
// Function ID: 1021
// Name: finally
// Dependencies: [1019]

// Module 1020 (finally)
import noop from "noop" /* 1019 */;

noop.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((arg0) => {
    const callback = arg0;
    const obj = callback(closure_1_1[0]);
    return callback(closure_1_1[0]).resolve(callback()).then(() => closure_0);
  }, (arg0) => {
    const callback = arg0;
    const obj = callback(closure_1_1[0]);
    return callback(closure_1_1[0]).resolve(callback()).then(() => {
      throw closure_0;
    });
  });
};

export default noop;
