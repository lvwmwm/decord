// Module ID: 10032
// Function ID: 10033
// Name: UID
// Dependencies: [6193, 5771, 2]
// Exports: UID, uid, useUID

// Module 10032 (UID)
import reactDefault from "react" /* 5771 */;
import uniqueIdDefault from "uniqueId" /* 6193 */;
import size from "module_2" /* 2 */;

const f97664 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f97664);
}
export function UID(children) {
  return children.children(reactDefault(f97664));
}
