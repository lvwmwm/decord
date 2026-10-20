// Module ID: 15359
// Function ID: 15360
// Dependencies: [15360]

// Module 15359
import module_15360_mod from "module_15360" /* 15360 */;

const call = prototype.call;
let module_15360 = module_15360_mod;
if (module_15360) {
  const bind = prototype.bind;
  module_15360 = bind.bind(call, call);
}
if (!module_15360) {
  module_15360 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15360;
