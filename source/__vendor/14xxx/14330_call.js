// Module ID: 14330
// Function ID: 14331
// Name: call
// Dependencies: [14305]

// Module 14330 (call)
import _mod14305 from "module_14305" /* 14305 */;

if (_mod14305) {
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
