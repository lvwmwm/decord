// Module ID: 14705
// Function ID: 14706
// Dependencies: [14680]

// Module 14705
import _mod14680 from "module_14680" /* 14680 */;

if (_mod14680) {
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
