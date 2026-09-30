// Module ID: 7556
// Function ID: 7557
// Name: UID
// Dependencies: [5070, 6106, 2]
// Exports: UID, uid, useUID

// Module 7556 (UID)
import uniqueIdDefault from "uniqueId" /* 5070 */;
import useInitialValueDefault from "useInitialValue" /* 6106 */;
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
