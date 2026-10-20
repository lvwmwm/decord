// Module ID: 15377
// Function ID: 15378
// Dependencies: [15378]

// Module 15377
import module_15378_mod from "module_15378" /* 15378 */;

const call = prototype.call;
let module_15378 = module_15378_mod;
if (module_15378) {
  const bind = prototype.bind;
  module_15378 = bind.bind(call, call);
}
if (!module_15378) {
  module_15378 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15378;
