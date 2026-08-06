// Module ID: 8524
// Function ID: 8525
// Name: uid
// Dependencies: [4491, 5637, 2]
// Exports: UID, uid, useUID

// Module 8524 (uid)
const result = require("set").fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return importDefault(4491)(str);
};
export const useUID = function useUID() {
  return importDefault(5637)(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(importDefault(5637)(() => callback(table[0])("uid_")));
};
