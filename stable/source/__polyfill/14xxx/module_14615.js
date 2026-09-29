// Module ID: 14615
// Function ID: 14616
// Dependencies: [14616]

// Module 14615
import module_14616_mod from "module_14616" /* 14616 */;

const call = prototype.call;
let module_14616 = module_14616_mod;
if (module_14616) {
  const bind = prototype.bind;
  module_14616 = bind.bind(call, call);
}
if (!module_14616) {
  module_14616 = (arg0) => {
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

export default module_14616;
