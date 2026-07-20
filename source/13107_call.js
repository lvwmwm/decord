// Module ID: 13107
// Function ID: 99435
// Name: call
// Dependencies: [13143]

// Module 13107 (call)
import module_13143 from "module_13143";

const call = prototype.call;
if (module_13143) {
  const bind = prototype.bind;
  module_13143 = bind.bind(call, call);
}
if (!require("module_13143")) {
  module_13143 = (arg0) => {
    const call = arg0;
    return () => arg0(...arguments);
  };
}

export default module_13143;
