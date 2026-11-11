// Module ID: 9085
// Function ID: 9086
// Name: UID
// Dependencies: [6276, 5854, 2]
// Exports: UID, uid, useUID

// Module 9085 (UID)
import reactDefault from "react" /* 5854 */;
import uniqueIdDefault from "uniqueId" /* 6276 */;
import size from "module_2" /* 2 */;

const f96657 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f96657);
}
export function UID(children) {
  return children.children(reactDefault(f96657));
}
