// Module ID: 16754
// Function ID: 16755
// Dependencies: [16755]

// Module 16754
import module_16755_mod from "module_16755" /* 16755 */;

const call = prototype.call;
let module_16755 = module_16755_mod;
if (module_16755) {
  const bind = prototype.bind;
  module_16755 = bind.bind(call, call);
}
if (!module_16755) {
  module_16755 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16755;
