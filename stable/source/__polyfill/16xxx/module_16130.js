// Module ID: 16130
// Function ID: 16131
// Dependencies: [16131]

// Module 16130
import module_16131_mod from "module_16131" /* 16131 */;

const call = prototype.call;
let module_16131 = module_16131_mod;
if (module_16131) {
  const bind = prototype.bind;
  module_16131 = bind.bind(call, call);
}
if (!module_16131) {
  module_16131 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16131;
