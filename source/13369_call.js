// Module ID: 13369
// Function ID: 13370
// Name: call
// Dependencies: [13370]

// Module 13369 (call)
import module_13370 from "module_13370";

const call = prototype.call;
if (module_13370) {
  const bind = prototype.bind;
  module_13370 = bind.bind(call, call);
}
if (!require("module_13370")) {
  module_13370 = (arg0) => {
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

export default module_13370;
