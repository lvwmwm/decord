// Module ID: 15458
// Function ID: 15459
// Dependencies: [15459]

// Module 15458
import module_15459_mod from "module_15459" /* 15459 */;

const call = prototype.call;
let module_15459 = module_15459_mod;
if (module_15459) {
  const bind = prototype.bind;
  module_15459 = bind.bind(call, call);
}
if (!module_15459) {
  module_15459 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15459;
