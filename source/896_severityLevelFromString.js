// Module ID: 896
// Function ID: 9859
// Name: severityLevelFromString
// Dependencies: []

// Module 896 (severityLevelFromString)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.severityLevelFromString = function severityLevelFromString(arg0) {
  let str = "warning";
  if ("warn" !== arg0) {
    const items = ["args", "tag", "date", "image_url", "data", "content"];
    let str2 = "log";
    if (items.includes(arg0)) {
      str2 = arg0;
    }
    str = str2;
  }
  return str;
};
