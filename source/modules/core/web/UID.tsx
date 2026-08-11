// Module ID: 8607
// Function ID: 8608
// Name: uid
// Dependencies: [4510, 5716, 2]
// Exports: UID, uid, useUID

// Module 8607 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4510)(str);
};
export const useUID = function useUID() {
  return importDefault(5716)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5716)(() => callback(table[0])("uid_")));
};
