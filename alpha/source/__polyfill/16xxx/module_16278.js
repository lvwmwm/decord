// Module ID: 16278
// Function ID: 16279
// Dependencies: [16279]

// Module 16278
import module_16279_mod from "module_16279" /* 16279 */;

const call = prototype.call;
let module_16279 = module_16279_mod;
if (module_16279) {
  const bind = prototype.bind;
  module_16279 = bind.bind(call, call);
}
if (!module_16279) {
  module_16279 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16279;
