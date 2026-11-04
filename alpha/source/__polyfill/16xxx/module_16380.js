// Module ID: 16380
// Function ID: 16381
// Dependencies: [16381]

// Module 16380
import module_16381_mod from "module_16381" /* 16381 */;

const call = prototype.call;
let module_16381 = module_16381_mod;
if (module_16381) {
  const bind = prototype.bind;
  module_16381 = bind.bind(call, call);
}
if (!module_16381) {
  module_16381 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16381;
