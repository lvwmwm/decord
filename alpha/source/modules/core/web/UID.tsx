// Module ID: 8542
// Function ID: 8543
// Name: UID
// Dependencies: [5810, 5371, 2]
// Exports: UID, uid, useUID

// Module 8542 (UID)
import reactDefault from "react" /* 5371 */;
import uniqueIdDefault from "uniqueId" /* 5810 */;
import size from "module_2" /* 2 */;

const f95094 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f95094);
}
export function UID(children) {
  return children.children(reactDefault(f95094));
}
