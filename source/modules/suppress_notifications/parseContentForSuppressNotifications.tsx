// Module ID: 6920
// Function ID: 55224
// Name: regExp
// Dependencies: []
// Exports: default

// Module 6920 (regExp)
const regExp = new RegExp("^" + "@silent" + "(\\s|$)");
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/suppress_notifications/parseContentForSuppressNotifications.tsx");

export default function parseContentForSuppressNotifications(str) {
  if (null == str) {
    const items = [false, ""];
    let items2 = items;
  } else if (null == str.match(regExp)) {
    const items1 = [false, str];
    items2 = items1;
  } else {
    items2 = [true, str.substring(7).trim()];
    str = str.substring(7);
  }
  return items2;
};
export const SILENT_RE = regExp;
