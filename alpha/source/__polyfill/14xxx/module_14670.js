// Module ID: 14670
// Function ID: 14671
// Dependencies: [14671]

// Module 14670
import module_14671_mod from "module_14671" /* 14671 */;

const call = prototype.call;
let module_14671 = module_14671_mod;
if (module_14671) {
  const bind = prototype.bind;
  module_14671 = bind.bind(call, call);
}
if (!module_14671) {
  module_14671 = (arg0) => {
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

export default module_14671;
