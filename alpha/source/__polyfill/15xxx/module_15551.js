// Module ID: 15551
// Function ID: 15552
// Dependencies: [15552]

// Module 15551
import module_15552_mod from "module_15552" /* 15552 */;

const call = prototype.call;
let module_15552 = module_15552_mod;
if (module_15552) {
  const bind = prototype.bind;
  module_15552 = bind.bind(call, call);
}
if (!module_15552) {
  module_15552 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15552;
