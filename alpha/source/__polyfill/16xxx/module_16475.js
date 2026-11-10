// Module ID: 16475
// Function ID: 16476
// Dependencies: [16476]

// Module 16475
import module_16476_mod from "module_16476" /* 16476 */;

const call = prototype.call;
let module_16476 = module_16476_mod;
if (module_16476) {
  const bind = prototype.bind;
  module_16476 = bind.bind(call, call);
}
if (!module_16476) {
  module_16476 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16476;
