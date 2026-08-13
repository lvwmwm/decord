// Module ID: 13645
// Function ID: 13646
// Name: call
// Dependencies: [13646]

// Module 13645 (call)
import module_13646 from "module_13646";

const call = prototype.call;
if (module_13646) {
  const bind = prototype.bind;
  module_13646 = bind.bind(call, call);
}
if (!require("module_13646")) {
  module_13646 = (arg0) => {
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

export default module_13646;
