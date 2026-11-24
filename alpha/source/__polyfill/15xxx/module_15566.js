// Module ID: 15566
// Function ID: 15567
// Dependencies: [15567]

// Module 15566
import module_15567_mod from "module_15567" /* 15567 */;

const call = prototype.call;
let module_15567 = module_15567_mod;
if (module_15567) {
  const bind = prototype.bind;
  module_15567 = bind.bind(call, call);
}
if (!module_15567) {
  module_15567 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15567;
