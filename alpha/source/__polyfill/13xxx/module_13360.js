// Module ID: 13360
// Function ID: 13361
// Dependencies: []
// Exports: severityLevelFromString

// Module 13360

export function severityLevelFromString(arg0) {
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
}
export const validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
