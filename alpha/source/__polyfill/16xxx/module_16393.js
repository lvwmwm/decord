// Module ID: 16393
// Function ID: 16394
// Dependencies: [16394]

// Module 16393
import module_16394_mod from "module_16394" /* 16394 */;

const call = prototype.call;
let module_16394 = module_16394_mod;
if (module_16394) {
  const bind = prototype.bind;
  module_16394 = bind.bind(call, call);
}
if (!module_16394) {
  module_16394 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16394;
