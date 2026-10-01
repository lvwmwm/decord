// Module ID: 13795
// Function ID: 13796
// Dependencies: [13796]

// Module 13795
import module_13796_mod from "module_13796" /* 13796 */;

const call = prototype.call;
let module_13796 = module_13796_mod;
if (module_13796) {
  const bind = prototype.bind;
  module_13796 = bind.bind(call, call);
}
if (!module_13796) {
  module_13796 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_13796;
