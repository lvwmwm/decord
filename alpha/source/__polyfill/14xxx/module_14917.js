// Module ID: 14917
// Function ID: 14918
// Dependencies: [14918]

// Module 14917
import module_14918_mod from "module_14918" /* 14918 */;

const call = prototype.call;
let module_14918 = module_14918_mod;
if (module_14918) {
  const bind = prototype.bind;
  module_14918 = bind.bind(call, call);
}
if (!module_14918) {
  module_14918 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14918;
