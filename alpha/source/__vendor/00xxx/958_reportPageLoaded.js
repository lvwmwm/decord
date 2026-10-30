// Module ID: 958
// Function ID: 959
// Name: reportPageLoaded
// Dependencies: [681]
// Exports: reportPageLoaded

// Module 958 (reportPageLoaded)
import _mod681 from "module_681" /* 681 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reportPageLoaded() {
  let client = arg0;
  if (arg0 === undefined) {
    const obj2 = _mod681;
    client = obj2.getClient();
  }
  if (client != null) {
    client.emit("endPageloadSpan");
  }
}
