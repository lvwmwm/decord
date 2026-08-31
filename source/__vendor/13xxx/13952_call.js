// Module ID: 13952
// Function ID: 13953
// Name: call
// Dependencies: [13927]

// Module 13952 (call)
import _mod13927 from "module_13927" /* 13927 */;

if (_mod13927) {
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
