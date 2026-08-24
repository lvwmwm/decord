// Module ID: 1096
// Function ID: 1097
// Name: reportPageLoaded
// Dependencies: [817]

// Module 1096 (reportPageLoaded)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = registerSpanErrorInstrumentation.getClient();
    const obj2 = registerSpanErrorInstrumentation;
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};
