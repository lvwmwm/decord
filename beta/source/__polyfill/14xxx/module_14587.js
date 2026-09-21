// Module ID: 14587
// Function ID: 14588
// Dependencies: [14588]

// Module 14587
import module_14588_mod from "module_14588" /* 14588 */;

const call = prototype.call;
let module_14588 = module_14588_mod;
if (module_14588) {
  const bind = prototype.bind;
  module_14588 = bind.bind(call, call);
}
if (!module_14588) {
  module_14588 = (arg0) => {
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

export default module_14588;
