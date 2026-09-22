// Module ID: 14419
// Function ID: 14420
// Dependencies: [14394]

// Module 14419
import _mod14394 from "module_14394" /* 14394 */;

if (_mod14394) {
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
