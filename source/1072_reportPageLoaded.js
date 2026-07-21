// Module ID: 1072
// Function ID: 12306
// Name: reportPageLoaded
// Dependencies: []

// Module 1072 (reportPageLoaded)
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
  first = arg1(arg6[0]).getClient();
};
