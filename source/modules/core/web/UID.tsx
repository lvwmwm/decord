// Module ID: 8650
// Function ID: 8651
// Name: uid
// Dependencies: [4551, 5756, 2]
// Exports: UID, uid, useUID

// Module 8650 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4551)(str);
};
export const useUID = function useUID() {
  return importDefault(5756)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5756)(() => callback(table[0])("uid_")));
};
