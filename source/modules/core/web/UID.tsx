// Module ID: 8541
// Function ID: 8542
// Name: uid
// Dependencies: [4508, 5656, 2]
// Exports: UID, uid, useUID

// Module 8541 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4508)(str);
};
export const useUID = function useUID() {
  return importDefault(5656)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5656)(() => callback(table[0])("uid_")));
};
