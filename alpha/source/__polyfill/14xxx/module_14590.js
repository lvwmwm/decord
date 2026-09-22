// Module ID: 14590
// Function ID: 14591
// Dependencies: [14591]

// Module 14590
import module_14591_mod from "module_14591" /* 14591 */;

const call = prototype.call;
let module_14591 = module_14591_mod;
if (module_14591) {
  const bind = prototype.bind;
  module_14591 = bind.bind(call, call);
}
if (!module_14591) {
  module_14591 = (arg0) => {
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

export default module_14591;
