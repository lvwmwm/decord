// Module ID: 15248
// Function ID: 15249
// Dependencies: [15249]

// Module 15248
import module_15249_mod from "module_15249" /* 15249 */;

const call = prototype.call;
let module_15249 = module_15249_mod;
if (module_15249) {
  const bind = prototype.bind;
  module_15249 = bind.bind(call, call);
}
if (!module_15249) {
  module_15249 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15249;
