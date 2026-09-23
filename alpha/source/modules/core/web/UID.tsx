// Module ID: 8263
// Function ID: 8264
// Name: UID
// Dependencies: [5031, 5901, 2]
// Exports: UID, uid, useUID

// Module 8263 (UID)
import uniqueIdDefault from "uniqueId" /* 5031 */;
import useInitialValueDefault from "useInitialValue" /* 5901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
};
export const useUID = function useUID() {
  return useInitialValueDefault(() => uniqueIdDefault("uid_"));
};
export const UID = function UID(children) {
  return children.children(useInitialValueDefault(() => uniqueIdDefault("uid_")));
};
