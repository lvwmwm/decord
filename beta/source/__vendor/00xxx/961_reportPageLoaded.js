// Module ID: 961
// Function ID: 962
// Name: reportPageLoaded
// Dependencies: [682]
// Exports: reportPageLoaded

// Module 961 (reportPageLoaded)
import _mod682 from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    const obj2 = _mod682;
    client = obj2.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};
