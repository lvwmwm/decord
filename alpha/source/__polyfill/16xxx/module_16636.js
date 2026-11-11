// Module ID: 16636
// Function ID: 16637
// Dependencies: [16637]

// Module 16636
import module_16637_mod from "module_16637" /* 16637 */;

const call = prototype.call;
let module_16637 = module_16637_mod;
if (module_16637) {
  const bind = prototype.bind;
  module_16637 = bind.bind(call, call);
}
if (!module_16637) {
  module_16637 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16637;
