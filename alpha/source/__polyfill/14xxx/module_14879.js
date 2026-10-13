// Module ID: 14879
// Function ID: 14880
// Dependencies: [14880]

// Module 14879
import module_14880_mod from "module_14880" /* 14880 */;

const call = prototype.call;
let module_14880 = module_14880_mod;
if (module_14880) {
  const bind = prototype.bind;
  module_14880 = bind.bind(call, call);
}
if (!module_14880) {
  module_14880 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14880;
