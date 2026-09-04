// Module ID: 8599
// Function ID: 8600
// Name: uid
// Dependencies: [4732, 5553, 2]
// Exports: UID, uid, useUID

// Module 8599 (uid)
import set from "set" /* 2 */;
import uniqueIdDefault from "uniqueId" /* 4732 */;
import useInitialValueDefault from "useInitialValue" /* 5553 */;

const result = set.fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
};
export const useUID = function useUID() {
  return useInitialValueDefault(() => callback(table[0])("uid_"));
};
export const UID = function UID(children) {
  return children.children(useInitialValueDefault(() => callback(table[0])("uid_")));
};
