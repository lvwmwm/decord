// Module ID: 14385
// Function ID: 14386
// Dependencies: [14386]

// Module 14385
import module_14386_mod from "module_14386" /* 14386 */;

const call = prototype.call;
let module_14386 = module_14386_mod;
if (module_14386) {
  const bind = prototype.bind;
  module_14386 = bind.bind(call, call);
}
if (!module_14386) {
  module_14386 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14386;
