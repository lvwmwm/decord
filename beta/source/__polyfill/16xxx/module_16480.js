// Module ID: 16480
// Function ID: 16481
// Dependencies: [16481]

// Module 16480
import module_16481_mod from "module_16481" /* 16481 */;

const call = prototype.call;
let module_16481 = module_16481_mod;
if (module_16481) {
  const bind = prototype.bind;
  module_16481 = bind.bind(call, call);
}
if (!module_16481) {
  module_16481 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16481;
