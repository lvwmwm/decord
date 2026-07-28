// Module ID: 13346
// Function ID: 102301
// Name: call
// Dependencies: [13347]

// Module 13346 (call)
import module_13347 from "module_13347";

const call = prototype.call;
if (module_13347) {
  const bind = prototype.bind;
  module_13347 = bind.bind(call, call);
}
if (!require("module_13347")) {
  module_13347 = (arg0) => {
    let closure_0 = arg0;
    return () => callback(...arguments);
  };
}

export default module_13347;
