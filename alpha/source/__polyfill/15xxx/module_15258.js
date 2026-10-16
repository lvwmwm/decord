// Module ID: 15258
// Function ID: 15259
// Dependencies: [15259]

// Module 15258
import module_15259_mod from "module_15259" /* 15259 */;

const call = prototype.call;
let module_15259 = module_15259_mod;
if (module_15259) {
  const bind = prototype.bind;
  module_15259 = bind.bind(call, call);
}
if (!module_15259) {
  module_15259 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15259;
