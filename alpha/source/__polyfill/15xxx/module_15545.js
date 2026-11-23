// Module ID: 15545
// Function ID: 15546
// Dependencies: [15546]

// Module 15545
import module_15546_mod from "module_15546" /* 15546 */;

const call = prototype.call;
let module_15546 = module_15546_mod;
if (module_15546) {
  const bind = prototype.bind;
  module_15546 = bind.bind(call, call);
}
if (!module_15546) {
  module_15546 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15546;
