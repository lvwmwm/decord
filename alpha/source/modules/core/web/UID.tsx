// Module ID: 9071
// Function ID: 9072
// Name: UID
// Dependencies: [6117, 5622, 2]
// Exports: UID, uid, useUID

// Module 9071 (UID)
import reactDefault from "react" /* 5622 */;
import uniqueIdDefault from "uniqueId" /* 6117 */;
import size from "module_2" /* 2 */;

const f95288 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f95288);
}
export function UID(children) {
  return children.children(reactDefault(f95288));
}
