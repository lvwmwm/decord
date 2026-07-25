// Module ID: 13301
// Function ID: 102123
// Name: call
// Dependencies: [13302]

// Module 13301 (call)
import module_13302 from "module_13302";

const call = prototype.call;
if (module_13302) {
  const bind = prototype.bind;
  module_13302 = bind.bind(call, call);
}
if (!require("module_13302")) {
  module_13302 = (arg0) => {
    let closure_0 = arg0;
    return () => callback(...arguments);
  };
}

export default module_13302;
