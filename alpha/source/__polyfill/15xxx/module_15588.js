// Module ID: 15588
// Function ID: 15589
// Dependencies: [15589]

// Module 15588
import module_15589_mod from "module_15589" /* 15589 */;

const call = prototype.call;
let module_15589 = module_15589_mod;
if (module_15589) {
  const bind = prototype.bind;
  module_15589 = bind.bind(call, call);
}
if (!module_15589) {
  module_15589 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15589;
