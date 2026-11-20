// Module ID: 8541
// Function ID: 8542
// Name: UID
// Dependencies: [5812, 5373, 2]
// Exports: UID, uid, useUID

// Module 8541 (UID)
import reactDefault from "react" /* 5373 */;
import uniqueIdDefault from "uniqueId" /* 5812 */;
import size from "module_2" /* 2 */;

const f93468 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f93468);
}
export function UID(children) {
  return children.children(reactDefault(f93468));
}
