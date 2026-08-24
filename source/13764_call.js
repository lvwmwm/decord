// Module ID: 13764
// Function ID: 13765
// Name: call
// Dependencies: [13739]

// Module 13764 (call)
import _mod13739 from "module_13739" /* 13739 */;

if (_mod13739) {
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
