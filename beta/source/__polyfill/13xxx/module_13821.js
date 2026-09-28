// Module ID: 13821
// Function ID: 13822
// Dependencies: [13796]

// Module 13821
import _mod13796 from "module_13796" /* 13796 */;

if (_mod13796) {
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
