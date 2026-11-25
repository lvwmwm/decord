// Module ID: 15688
// Function ID: 15689
// Dependencies: [15689]

// Module 15688
import module_15689_mod from "module_15689" /* 15689 */;

const call = prototype.call;
let module_15689 = module_15689_mod;
if (module_15689) {
  const bind = prototype.bind;
  module_15689 = bind.bind(call, call);
}
if (!module_15689) {
  module_15689 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15689;
