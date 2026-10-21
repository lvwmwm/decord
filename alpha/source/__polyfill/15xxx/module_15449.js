// Module ID: 15449
// Function ID: 15450
// Dependencies: [15450]

// Module 15449
import module_15450_mod from "module_15450" /* 15450 */;

const call = prototype.call;
let module_15450 = module_15450_mod;
if (module_15450) {
  const bind = prototype.bind;
  module_15450 = bind.bind(call, call);
}
if (!module_15450) {
  module_15450 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15450;
