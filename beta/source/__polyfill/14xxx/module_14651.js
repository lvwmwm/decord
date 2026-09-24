// Module ID: 14651
// Function ID: 14652
// Dependencies: [14626]

// Module 14651
import _mod14626 from "module_14626" /* 14626 */;

if (_mod14626) {
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
