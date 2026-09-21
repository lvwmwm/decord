// Module ID: 13136
// Function ID: 13137
// Dependencies: []
// Exports: severityLevelFromString

// Module 13136

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
export const validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
