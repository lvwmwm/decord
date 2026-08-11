// Module ID: 13587
// Function ID: 13588
// Name: call
// Dependencies: [13588]

// Module 13587 (call)
import module_13588 from "module_13588";

const call = prototype.call;
if (module_13588) {
  const bind = prototype.bind;
  module_13588 = bind.bind(call, call);
}
if (!require("module_13588")) {
  module_13588 = (arg0) => {
    let closure_0 = arg0;
    return () => {
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_13588;
