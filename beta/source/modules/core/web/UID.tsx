// Module ID: 8209
// Function ID: 8210
// Name: UID
// Dependencies: [4992, 5847, 2]
// Exports: UID, uid, useUID

// Module 8209 (UID)
import uniqueIdDefault from "uniqueId" /* 4992 */;
import useInitialValueDefault from "useInitialValue" /* 5847 */;
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
