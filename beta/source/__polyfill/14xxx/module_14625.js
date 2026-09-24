// Module ID: 14625
// Function ID: 14626
// Dependencies: [14626]

// Module 14625
import module_14626_mod from "module_14626" /* 14626 */;

const call = prototype.call;
let module_14626 = module_14626_mod;
if (module_14626) {
  const bind = prototype.bind;
  module_14626 = bind.bind(call, call);
}
if (!module_14626) {
  module_14626 = (arg0) => {
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

export default module_14626;
