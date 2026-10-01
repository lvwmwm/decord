// Module ID: 13999
// Function ID: 14000
// Dependencies: [14000]

// Module 13999
import module_14000_mod from "module_14000" /* 14000 */;

const call = prototype.call;
let module_14000 = module_14000_mod;
if (module_14000) {
  const bind = prototype.bind;
  module_14000 = bind.bind(call, call);
}
if (!module_14000) {
  module_14000 = (arg0) => {
    closure_0 = arg0;
    return () => {
      const apply = call.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(tmp2);
      } else {
        applyArgumentsResult = apply(tmp2, arguments);
      }
      return applyArgumentsResult;
    };
  };
}

export default module_14000;
