// Module ID: 15814
// Function ID: 15815
// Dependencies: [15815]

// Module 15814
import module_15815_mod from "module_15815" /* 15815 */;

const call = prototype.call;
let module_15815 = module_15815_mod;
if (module_15815) {
  const bind = prototype.bind;
  module_15815 = bind.bind(call, call);
}
if (!module_15815) {
  module_15815 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15815;
