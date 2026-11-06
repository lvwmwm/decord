// Module ID: 16390
// Function ID: 16391
// Dependencies: [16391]

// Module 16390
import module_16391_mod from "module_16391" /* 16391 */;

const call = prototype.call;
let module_16391 = module_16391_mod;
if (module_16391) {
  const bind = prototype.bind;
  module_16391 = bind.bind(call, call);
}
if (!module_16391) {
  module_16391 = (arg0) => {
    let closure_0 = arg0;
    return function() {
      return call(...arguments);
    };
  };
}

export default module_16391;
