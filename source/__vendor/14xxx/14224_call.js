// Module ID: 14224
// Function ID: 14225
// Name: call
// Dependencies: [14199]

// Module 14224 (call)
import _mod14199 from "module_14199" /* 14199 */;

if (_mod14199) {
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
