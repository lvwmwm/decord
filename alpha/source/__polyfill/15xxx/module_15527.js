// Module ID: 15527
// Function ID: 15528
// Dependencies: [15528]

// Module 15527
import module_15528_mod from "module_15528" /* 15528 */;

const call = prototype.call;
let module_15528 = module_15528_mod;
if (module_15528) {
  const bind = prototype.bind;
  module_15528 = bind.bind(call, call);
}
if (!module_15528) {
  module_15528 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15528;
