// Module ID: 13822
// Function ID: 13823
// Dependencies: [13797]

// Module 13822
import _mod13797 from "module_13797" /* 13797 */;

if (_mod13797) {
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
