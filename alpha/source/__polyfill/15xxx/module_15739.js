// Module ID: 15739
// Function ID: 15740
// Dependencies: [15740]

// Module 15739
import module_15740_mod from "module_15740" /* 15740 */;

const call = prototype.call;
let module_15740 = module_15740_mod;
if (module_15740) {
  const bind = prototype.bind;
  module_15740 = bind.bind(call, call);
}
if (!module_15740) {
  module_15740 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_15740;
