// Module ID: 13797
// Function ID: 13798
// Dependencies: [13798]

// Module 13797
import module_13798_mod from "module_13798" /* 13798 */;

const call = prototype.call;
let module_13798 = module_13798_mod;
if (module_13798) {
  const bind = prototype.bind;
  module_13798 = bind.bind(call, call);
}
if (!module_13798) {
  module_13798 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_13798;
