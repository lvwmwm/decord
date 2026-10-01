// Module ID: 885
// Function ID: 886
// Dependencies: [884]

// Module 885
import _mod884 from "module_884" /* 884 */;

_mod884.prototype.finally = function(arg0) {
  let closure_0 = arg0;
  return this.then((result) => {
    closure_0 = result;
    const obj = _mod884;
    const resolveResult = obj.resolve(closure_0());
    return resolveResult.then(() => closure_0);
  }, (arg0) => {
    closure_0 = arg0;
    const obj = _mod884;
    const resolveResult = obj.resolve(closure_0());
    return resolveResult.then(() => {
      throw closure_0;
    });
  });
};

export default _mod884;
