// Module ID: 14616
// Function ID: 14617
// Dependencies: [14591]

// Module 14616
import _mod14591 from "module_14591" /* 14591 */;

if (_mod14591) {
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
