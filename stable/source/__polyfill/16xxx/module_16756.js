// Module ID: 16756
// Function ID: 16757
// Dependencies: [16757]

// Module 16756
import module_16757_mod from "module_16757" /* 16757 */;

const call = prototype.call;
let module_16757 = module_16757_mod;
if (module_16757) {
  const bind = prototype.bind;
  module_16757 = bind.bind(call, call);
}
if (!module_16757) {
  module_16757 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16757;
