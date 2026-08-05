// Module ID: 8383
// Function ID: 8384
// Name: uid
// Dependencies: [4461, 5583, 2]
// Exports: UID, uid, useUID

// Module 8383 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4461)(str);
};
export const useUID = function useUID() {
  return importDefault(5583)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5583)(() => callback(table[0])("uid_")));
};
