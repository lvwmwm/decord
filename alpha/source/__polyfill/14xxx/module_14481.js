// Module ID: 14481
// Function ID: 14482
// Dependencies: [14482]

// Module 14481
import module_14482_mod from "module_14482" /* 14482 */;

const call = prototype.call;
let module_14482 = module_14482_mod;
if (module_14482) {
  const bind = prototype.bind;
  module_14482 = bind.bind(call, call);
}
if (!module_14482) {
  module_14482 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14482;
