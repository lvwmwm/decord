// Module ID: 14066
// Function ID: 14067
// Dependencies: [14067]

// Module 14066
import module_14067_mod from "module_14067" /* 14067 */;

const call = prototype.call;
let module_14067 = module_14067_mod;
if (module_14067) {
  const bind = prototype.bind;
  module_14067 = bind.bind(call, call);
}
if (!module_14067) {
  module_14067 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14067;
