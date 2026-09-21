// Module ID: 965
// Function ID: 966
// Name: reportPageLoaded
// Dependencies: [686]
// Exports: reportPageLoaded

// Module 965 (reportPageLoaded)
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const reportPageLoaded = function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    client = _mod686.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
};
