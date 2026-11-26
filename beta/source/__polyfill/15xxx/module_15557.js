// Module ID: 15557
// Function ID: 15558
// Dependencies: [15558]

// Module 15557
import module_15558_mod from "module_15558" /* 15558 */;

const call = prototype.call;
let module_15558 = module_15558_mod;
if (module_15558) {
  const bind = prototype.bind;
  module_15558 = bind.bind(call, call);
}
if (!module_15558) {
  module_15558 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15558;
