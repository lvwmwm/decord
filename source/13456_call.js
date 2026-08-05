// Module ID: 13456
// Function ID: 13457
// Name: call
// Dependencies: [13457]

// Module 13456 (call)
import module_13457 from "module_13457";

const call = prototype.call;
if (module_13457) {
  const bind = prototype.bind;
  module_13457 = bind.bind(call, call);
}
if (!require("module_13457")) {
  module_13457 = (arg0) => {
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

export default module_13457;
