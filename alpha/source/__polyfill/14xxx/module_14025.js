// Module ID: 14025
// Function ID: 14026
// Dependencies: [14000]

// Module 14025
import _mod14000 from "module_14000" /* 14000 */;

if (_mod14000) {
  let fn = call.bind(call);
} else {
  fn = () => {
    const apply = call.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(tmp);
    } else {
      applyArgumentsResult = apply(tmp, arguments);
    }
    return applyArgumentsResult;
  };
}

export default fn;
