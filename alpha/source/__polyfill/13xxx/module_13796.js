// Module ID: 13796
// Function ID: 13797
// Dependencies: [13797]

// Module 13796
import module_13797_mod from "module_13797" /* 13797 */;

const call = prototype.call;
let module_13797 = module_13797_mod;
if (module_13797) {
  const bind = prototype.bind;
  module_13797 = bind.bind(call, call);
}
if (!module_13797) {
  module_13797 = (arg0) => {
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

export default module_13797;
