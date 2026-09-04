// Module ID: 14256
// Function ID: 14257
// Name: call
// Dependencies: [14231]

// Module 14256 (call)
import _mod14231 from "module_14231" /* 14231 */;

if (_mod14231) {
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
