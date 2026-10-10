// Module ID: 14535
// Function ID: 14536
// Dependencies: [14536]

// Module 14535
import module_14536_mod from "module_14536" /* 14536 */;

const call = prototype.call;
let module_14536 = module_14536_mod;
if (module_14536) {
  const bind = prototype.bind;
  module_14536 = bind.bind(call, call);
}
if (!module_14536) {
  module_14536 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_14536;
