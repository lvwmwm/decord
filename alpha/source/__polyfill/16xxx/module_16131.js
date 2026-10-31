// Module ID: 16131
// Function ID: 16132
// Dependencies: [16132]

// Module 16131
import module_16132_mod from "module_16132" /* 16132 */;

const call = prototype.call;
let module_16132 = module_16132_mod;
if (module_16132) {
  const bind = prototype.bind;
  module_16132 = bind.bind(call, call);
}
if (!module_16132) {
  module_16132 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16132;
