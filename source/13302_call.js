// Module ID: 13302
// Function ID: 102128
// Name: call
// Dependencies: [13303]

// Module 13302 (call)
import module_13303 from "module_13303";

const call = prototype.call;
if (module_13303) {
  const bind = prototype.bind;
  module_13303 = bind.bind(call, call);
}
if (!require("module_13303")) {
  module_13303 = (arg0) => {
    let closure_0 = arg0;
    return () => callback(...arguments);
  };
}

export default module_13303;
