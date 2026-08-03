// Module ID: 13477
// Function ID: 13478
// Name: call
// Dependencies: [13452]

// Module 13477 (call)
if (require("module_13452")) {
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
