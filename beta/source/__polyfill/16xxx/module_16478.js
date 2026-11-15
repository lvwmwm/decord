// Module ID: 16478
// Function ID: 16479
// Dependencies: [16479]

// Module 16478
import module_16479_mod from "module_16479" /* 16479 */;

const call = prototype.call;
let module_16479 = module_16479_mod;
if (module_16479) {
  const bind = prototype.bind;
  module_16479 = bind.bind(call, call);
}
if (!module_16479) {
  module_16479 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16479;
