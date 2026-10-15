// Module ID: 15213
// Function ID: 15214
// Dependencies: [15214]

// Module 15213
import module_15214_mod from "module_15214" /* 15214 */;

const call = prototype.call;
let module_15214 = module_15214_mod;
if (module_15214) {
  const bind = prototype.bind;
  module_15214 = bind.bind(call, call);
}
if (!module_15214) {
  module_15214 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15214;
