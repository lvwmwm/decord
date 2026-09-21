// Module ID: 14613
// Function ID: 14614
// Dependencies: [14588]

// Module 14613
import _mod14588 from "module_14588" /* 14588 */;

if (_mod14588) {
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
