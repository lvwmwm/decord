// Module ID: 13648
// Function ID: 13649
// Name: call
// Dependencies: [13649]

// Module 13648 (call)
import module_13649 from "module_13649";

const call = prototype.call;
if (module_13649) {
  const bind = prototype.bind;
  module_13649 = bind.bind(call, call);
}
if (!require("module_13649")) {
  module_13649 = (arg0) => {
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

export default module_13649;
