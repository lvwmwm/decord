// Module ID: 8646
// Function ID: 8647
// Name: uid
// Dependencies: [4550, 5755, 2]
// Exports: UID, uid, useUID

// Module 8646 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4550)(str);
};
export const useUID = function useUID() {
  return importDefault(5755)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5755)(() => callback(table[0])("uid_")));
};
