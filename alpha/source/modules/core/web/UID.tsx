// Module ID: 8929
// Function ID: 8930
// Name: UID
// Dependencies: [5991, 5496, 2]
// Exports: UID, uid, useUID

// Module 8929 (UID)
import reactDefault from "react" /* 5496 */;
import uniqueIdDefault from "uniqueId" /* 5991 */;
import size from "module_2" /* 2 */;

const f94410 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f94410);
}
export function UID(children) {
  return children.children(reactDefault(f94410));
}
