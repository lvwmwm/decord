// Module ID: 797
// Function ID: 798
// Name: severityLevelFromString
// Dependencies: []
// Exports: severityLevelFromString

// Module 797 (severityLevelFromString)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const severityLevelFromString = function severityLevelFromString(arg0) {
  let str = "warning";
  if ("warn" !== arg0) {
    const items = ["fatal", "error", "warning", "log", "info", "debug"];
    let str2 = "log";
    if (items.includes(arg0)) {
      str2 = arg0;
    }
    str = str2;
  }
  return str;
};
