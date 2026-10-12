// Module ID: 14558
// Function ID: 14559
// Dependencies: [14559]

// Module 14558
import module_14559_mod from "module_14559" /* 14559 */;

const call = prototype.call;
let module_14559 = module_14559_mod;
if (module_14559) {
  const bind = prototype.bind;
  module_14559 = bind.bind(call, call);
}
if (!module_14559) {
  module_14559 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14559;
