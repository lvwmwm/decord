// Module ID: 10015
// Function ID: 10016
// Name: UID
// Dependencies: [6187, 5769, 2]
// Exports: UID, uid, useUID

// Module 10015 (UID)
import reactDefault from "react" /* 5769 */;
import uniqueIdDefault from "uniqueId" /* 6187 */;
import size from "module_2" /* 2 */;

const f97167 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f97167);
}
export function UID(children) {
  return children.children(reactDefault(f97167));
}
