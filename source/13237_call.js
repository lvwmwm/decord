// Module ID: 13237
// Function ID: 101669
// Name: call
// Dependencies: [13238]

// Module 13237 (call)
import module_13238 from "module_13238";

const call = prototype.call;
if (module_13238) {
  const bind = prototype.bind;
  module_13238 = bind.bind(call, call);
}
if (!require("module_13238")) {
  module_13238 = (arg0) => {
    let closure_0 = arg0;
    return () => callback(...arguments);
  };
}

export default module_13238;
