// Module ID: 16438
// Function ID: 16439
// Dependencies: [16439]

// Module 16438
import module_16439_mod from "module_16439" /* 16439 */;

const call = prototype.call;
let module_16439 = module_16439_mod;
if (module_16439) {
  const bind = prototype.bind;
  module_16439 = bind.bind(call, call);
}
if (!module_16439) {
  module_16439 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16439;
