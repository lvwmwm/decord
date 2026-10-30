// Module ID: 9856
// Function ID: 9857
// Name: UID
// Dependencies: [6024, 5607, 2]
// Exports: UID, uid, useUID

// Module 9856 (UID)
import reactDefault from "react" /* 5607 */;
import uniqueIdDefault from "uniqueId" /* 6024 */;
import size from "module_2" /* 2 */;

const f95540 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f95540);
}
export function UID(children) {
  return children.children(reactDefault(f95540));
}
