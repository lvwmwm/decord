// Module ID: 16448
// Function ID: 16449
// Dependencies: [16449]

// Module 16448
import module_16449_mod from "module_16449" /* 16449 */;

const call = prototype.call;
let module_16449 = module_16449_mod;
if (module_16449) {
  const bind = prototype.bind;
  module_16449 = bind.bind(call, call);
}
if (!module_16449) {
  module_16449 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16449;
