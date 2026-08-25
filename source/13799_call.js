// Module ID: 13799
// Function ID: 13800
// Name: call
// Dependencies: [13774]

// Module 13799 (call)
import _mod13774 from "module_13774" /* 13774 */;

if (_mod13774) {
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
