// Module ID: 13990
// Function ID: 13991
// Dependencies: [13965]

// Module 13990
import _mod13965 from "module_13965" /* 13965 */;

if (_mod13965) {
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
