// Module ID: 897
// Function ID: 898
// Dependencies: [896]

// Module 897
import _mod896 from "module_896" /* 896 */;

_mod896.prototype.finally = function(arg0) {
  let closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    const obj = _mod896;
    const resolveResult = obj.resolve(closure_0());
    return resolveResult.then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    const obj = _mod896;
    const resolveResult = obj.resolve(closure_0());
    return resolveResult.then(() => {
      throw closure_0;
    });
  });
};

export default _mod896;
