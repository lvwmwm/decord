// Module ID: 13840
// Function ID: 13841
// Dependencies: [13841]

// Module 13840
import module_13841_mod from "module_13841" /* 13841 */;

const call = prototype.call;
let module_13841 = module_13841_mod;
if (module_13841) {
  const bind = prototype.bind;
  module_13841 = bind.bind(call, call);
}
if (!module_13841) {
  module_13841 = (arg0) => {
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

export default module_13841;
