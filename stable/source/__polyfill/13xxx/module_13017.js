// Module ID: 13017
// Function ID: 13018
// Dependencies: []
// Exports: severityLevelFromString

// Module 13017

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
