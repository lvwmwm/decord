// Module ID: 13368
// Function ID: 13369
// Dependencies: []
// Exports: severityLevelFromString

// Module 13368

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
