// Module ID: 7317
// Function ID: 59001
// Name: severityLevelFromString
// Dependencies: []

// Module 7317 (severityLevelFromString)
arg5.severityLevelFromString = function severityLevelFromString(arg0) {
  let str = "warning";
  if ("warn" !== arg0) {
    const items = [null, null, null, null, null, null];
    let str2 = "log";
    if (items.includes(arg0)) {
      str2 = arg0;
    }
    str = str2;
  }
  return str;
};
arg5.validSeverityLevels = [null, null, null, null, null, null];
