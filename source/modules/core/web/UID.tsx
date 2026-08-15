// Module ID: 9961
// Function ID: 9962
// Name: uid
// Dependencies: [5261, 7127, 2]
// Exports: UID, uid, useUID

// Module 9961 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(5261)(str);
};
export const useUID = function useUID() {
  return importDefault(7127)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(7127)(() => callback(table[0])("uid_")));
};
