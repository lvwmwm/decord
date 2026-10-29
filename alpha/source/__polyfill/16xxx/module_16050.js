// Module ID: 16050
// Function ID: 16051
// Dependencies: [16051]

// Module 16050
import module_16051_mod from "module_16051" /* 16051 */;

const call = prototype.call;
let module_16051 = module_16051_mod;
if (module_16051) {
  const bind = prototype.bind;
  module_16051 = bind.bind(call, call);
}
if (!module_16051) {
  module_16051 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16051;
