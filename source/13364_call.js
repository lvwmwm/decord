// Module ID: 13364
// Function ID: 13365
// Name: call
// Dependencies: [13365]

// Module 13364 (call)
import module_13365 from "module_13365";

const call = prototype.call;
if (module_13365) {
  const bind = prototype.bind;
  module_13365 = bind.bind(call, call);
}
if (!require("module_13365")) {
  module_13365 = (arg0) => {
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

export default module_13365;
