// Module ID: 15493
// Function ID: 15494
// Dependencies: [15494]

// Module 15493
import module_15494_mod from "module_15494" /* 15494 */;

const call = prototype.call;
let module_15494 = module_15494_mod;
if (module_15494) {
  const bind = prototype.bind;
  module_15494 = bind.bind(call, call);
}
if (!module_15494) {
  module_15494 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15494;
