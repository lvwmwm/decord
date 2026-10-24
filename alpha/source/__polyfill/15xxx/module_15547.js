// Module ID: 15547
// Function ID: 15548
// Dependencies: [15548]

// Module 15547
import module_15548_mod from "module_15548" /* 15548 */;

const call = prototype.call;
let module_15548 = module_15548_mod;
if (module_15548) {
  const bind = prototype.bind;
  module_15548 = bind.bind(call, call);
}
if (!module_15548) {
  module_15548 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15548;
