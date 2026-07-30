// Module ID: 9298
// Function ID: 9299
// Name: uid
// Dependencies: [4396, 5503, 2]
// Exports: UID, uid, useUID

// Module 9298 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4396)(str);
};
export const useUID = function useUID() {
  return importDefault(5503)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5503)(() => callback(table[0])("uid_")));
};
