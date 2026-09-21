// Module ID: 889
// Function ID: 890
// Dependencies: [888]

// Module 889
import _mod888 from "module_888" /* 888 */;

_mod888.prototype.finally = function(arg0) {
  closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    return _mod888.resolve(closure_0()).then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    return _mod888.resolve(closure_0()).then(() => {
      throw closure_0;
    });
  });
};

export default _mod888;
