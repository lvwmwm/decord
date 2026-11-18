// Module ID: 784
// Function ID: 785
// Name: severityLevelFromString
// Dependencies: []
// Exports: severityLevelFromString

// Module 784 (severityLevelFromString)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function severityLevelFromString(level) {
  let str = "warning";
  if ("warn" !== level) {
    const items = ["fatal", "error", "warning", "log", "info", "debug"];
    let str2 = "log";
    if (items.includes(level)) {
      str2 = level;
    }
    str = str2;
  }
  return str;
}
