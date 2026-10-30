// Module ID: 16090
// Function ID: 16091
// Dependencies: [16091]

// Module 16090
import module_16091_mod from "module_16091" /* 16091 */;

const call = prototype.call;
let module_16091 = module_16091_mod;
if (module_16091) {
  const bind = prototype.bind;
  module_16091 = bind.bind(call, call);
}
if (!module_16091) {
  module_16091 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16091;
