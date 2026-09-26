// Module ID: 14641
// Function ID: 14642
// Dependencies: [14616]

// Module 14641
import _mod14616 from "module_14616" /* 14616 */;

if (_mod14616) {
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
