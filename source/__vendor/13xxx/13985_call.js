// Module ID: 13985
// Function ID: 13986
// Name: call
// Dependencies: [13960]

// Module 13985 (call)
import _mod13960 from "module_13960" /* 13960 */;

if (_mod13960) {
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
