// Module ID: 8664
// Function ID: 8665
// Name: uid
// Dependencies: [4573, 5777, 2]
// Exports: UID, uid, useUID

// Module 8664 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4573)(str);
};
export const useUID = function useUID() {
  return importDefault(5777)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5777)(() => callback(table[0])("uid_")));
};
