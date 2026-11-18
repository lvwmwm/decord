// Module ID: 8573
// Function ID: 8574
// Name: UID
// Dependencies: [5839, 5402, 2]
// Exports: UID, uid, useUID

// Module 8573 (UID)
import reactDefault from "react" /* 5402 */;
import uniqueIdDefault from "uniqueId" /* 5839 */;
import size from "module_2" /* 2 */;

const f95149 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f95149);
}
export function UID(children) {
  return children.children(reactDefault(f95149));
}
