// Module ID: 189
// Function ID: 2653
// Dependencies: [190, 126, 191]

// Module 189
import isNativeFunction from "isNativeFunction";

while (true) {
  if (isNativeFunction.hasNativeConstructor(async () => obj ? obj.resume() : undefined, "GeneratorFunction")) {
    break;
  } else {
    let tmp = dependencyMap;
    let num = 1;
    let _module1 = require("polyfillObjectProperty");
    let str = "regeneratorRuntime";
    let polyfillGlobalResult = _module1.polyfillGlobal("regeneratorRuntime", () => {
      delete tmp.regeneratorRuntime;
      return require(191) /* define */;
    });
    break;
  }
}
