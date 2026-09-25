// Module ID: 13866
// Function ID: 13867
// Dependencies: [13841]

// Module 13866
import _mod13841 from "module_13841" /* 13841 */;

if (_mod13841) {
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
