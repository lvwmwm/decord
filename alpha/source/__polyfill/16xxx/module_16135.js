// Module ID: 16135
// Function ID: 16136
// Dependencies: [16136]

// Module 16135
import module_16136_mod from "module_16136" /* 16136 */;

const call = prototype.call;
let module_16136 = module_16136_mod;
if (module_16136) {
  const bind = prototype.bind;
  module_16136 = bind.bind(call, call);
}
if (!module_16136) {
  module_16136 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16136;
