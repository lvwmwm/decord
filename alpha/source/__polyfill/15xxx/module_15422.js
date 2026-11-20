// Module ID: 15422
// Function ID: 15423
// Dependencies: [15423]

// Module 15422
import module_15423_mod from "module_15423" /* 15423 */;

const call = prototype.call;
let module_15423 = module_15423_mod;
if (module_15423) {
  const bind = prototype.bind;
  module_15423 = bind.bind(call, call);
}
if (!module_15423) {
  module_15423 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15423;
