// Module ID: 15746
// Function ID: 15747
// Dependencies: [15747]

// Module 15746
import module_15747_mod from "module_15747" /* 15747 */;

const call = prototype.call;
let module_15747 = module_15747_mod;
if (module_15747) {
  const bind = prototype.bind;
  module_15747 = bind.bind(call, call);
}
if (!module_15747) {
  module_15747 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15747;
