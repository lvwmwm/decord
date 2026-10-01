// Module ID: 7534
// Function ID: 7535
// Name: UID
// Dependencies: [5049, 6096, 2]
// Exports: UID, uid, useUID

// Module 7534 (UID)
import uniqueIdDefault from "uniqueId" /* 5049 */;
import useInitialValueDefault from "useInitialValue" /* 6096 */;
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
