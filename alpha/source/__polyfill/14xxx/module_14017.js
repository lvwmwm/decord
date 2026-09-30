// Module ID: 14017
// Function ID: 14018
// Dependencies: [13992]

// Module 14017
import _mod13992 from "module_13992" /* 13992 */;

if (_mod13992) {
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
