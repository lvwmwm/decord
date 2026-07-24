// Module ID: 1072
// Function ID: 12308
// Name: reportPageLoaded
// Dependencies: [794]

// Module 1072 (reportPageLoaded)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reportPageLoaded = function reportPageLoaded() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (null != first) {
      first.emit("endPageloadSpan");
    }
  }
  first = require(794) /* registerSpanErrorInstrumentation */.getClient();
};
