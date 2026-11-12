// Module ID: 16477
// Function ID: 16478
// Dependencies: [16478]

// Module 16477
import module_16478_mod from "module_16478" /* 16478 */;

const call = prototype.call;
let module_16478 = module_16478_mod;
if (module_16478) {
  const bind = prototype.bind;
  module_16478 = bind.bind(call, call);
}
if (!module_16478) {
  module_16478 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16478;
