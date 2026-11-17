// Module ID: 16789
// Function ID: 16790
// Dependencies: [16790]

// Module 16789
import module_16790_mod from "module_16790" /* 16790 */;

const call = prototype.call;
let module_16790 = module_16790_mod;
if (module_16790) {
  const bind = prototype.bind;
  module_16790 = bind.bind(call, call);
}
if (!module_16790) {
  module_16790 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16790;
