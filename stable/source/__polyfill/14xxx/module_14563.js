// Module ID: 14563
// Function ID: 14564
// Dependencies: [14564]

// Module 14563
import module_14564_mod from "module_14564" /* 14564 */;

const call = prototype.call;
let module_14564 = module_14564_mod;
if (module_14564) {
  const bind = prototype.bind;
  module_14564 = bind.bind(call, call);
}
if (!module_14564) {
  module_14564 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14564;
