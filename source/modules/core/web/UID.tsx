// Module ID: 9313
// Function ID: 9314
// Name: uid
// Dependencies: [4400, 5507, 2]
// Exports: UID, uid, useUID

// Module 9313 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4400)(str);
};
export const useUID = function useUID() {
  return importDefault(5507)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5507)(() => callback(table[0])("uid_")));
};
