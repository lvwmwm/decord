// Module ID: 14230
// Function ID: 14231
// Name: call
// Dependencies: [14231]

// Module 14230 (call)
import module_14231 from "module_14231" /* 14231 */;

const call = prototype.call;
if (module_14231) {
  const bind = prototype.bind;
  module_14231 = bind.bind(call, call);
}
if (!module_14231) {
  module_14231 = (arg0) => {
    closure_0 = arg0;
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

export default module_14231;
