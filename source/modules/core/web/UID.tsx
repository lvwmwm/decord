// Module ID: 8814
// Function ID: 8815
// Name: uid
// Dependencies: [4725, 5950, 2]
// Exports: UID, uid, useUID

// Module 8814 (uid)
import set from "set" /* 2 */;
import uniqueIdDefault from "uniqueId" /* 4725 */;
import useInitialValueDefault from "useInitialValue" /* 5950 */;

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
