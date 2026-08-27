// Module ID: 13899
// Function ID: 13900
// Name: call
// Dependencies: [13874]

// Module 13899 (call)
import _mod13874 from "module_13874" /* 13874 */;

if (_mod13874) {
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
