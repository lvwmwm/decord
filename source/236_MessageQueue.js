// Module ID: 236
// Function ID: 237
// Name: MessageQueue
// Dependencies: [39]

// Module 236 (MessageQueue)
let closure_0 = global;
closure_0 = undefined;
if (true === global.RN$Bridgeless) {
  let fn = (arg0, fn) => {
    let closure_0 = fn;
    if (typeof fn !== "function") {
      const result = closure_0.RN$registerCallableModule(arg0, () => closure_0);
    } else {
      const result1 = closure_0.RN$registerCallableModule(arg0, fn);
    }
  };
} else {
  closure_0 = require("MessageQueue").default;
  fn = (ReactFabric, fn) => {
    if (typeof fn !== "function") {
      const result = closure_0.registerCallableModule(ReactFabric, fn);
    } else {
      const result1 = closure_0.registerLazyCallableModule(ReactFabric, fn);
    }
  };
}

export default fn;
