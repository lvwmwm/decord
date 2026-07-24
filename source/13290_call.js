// Module ID: 13290
// Function ID: 101996
// Name: call
// Dependencies: [13291]

// Module 13290 (call)
import module_13291 from "module_13291";

const call = prototype.call;
if (module_13291) {
  const bind = prototype.bind;
  module_13291 = bind.bind(call, call);
}
if (!require("module_13291")) {
  module_13291 = (arg0) => {
    let closure_0 = arg0;
    return () => callback(...arguments);
  };
}

export default module_13291;
