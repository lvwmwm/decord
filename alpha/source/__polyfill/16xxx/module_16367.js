// Module ID: 16367
// Function ID: 16368
// Dependencies: [16368]

// Module 16367
import module_16368_mod from "module_16368" /* 16368 */;

const call = prototype.call;
let module_16368 = module_16368_mod;
if (module_16368) {
  const bind = prototype.bind;
  module_16368 = bind.bind(call, call);
}
if (!module_16368) {
  module_16368 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16368;
