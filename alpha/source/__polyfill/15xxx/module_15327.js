// Module ID: 15327
// Function ID: 15328
// Dependencies: [15328]

// Module 15327
import module_15328_mod from "module_15328" /* 15328 */;

const call = prototype.call;
let module_15328 = module_15328_mod;
if (module_15328) {
  const bind = prototype.bind;
  module_15328 = bind.bind(call, call);
}
if (!module_15328) {
  module_15328 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15328;
