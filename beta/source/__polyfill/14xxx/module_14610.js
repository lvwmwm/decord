// Module ID: 14610
// Function ID: 14611
// Dependencies: [14585]

// Module 14610
import _mod14585 from "module_14585" /* 14585 */;

if (_mod14585) {
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
