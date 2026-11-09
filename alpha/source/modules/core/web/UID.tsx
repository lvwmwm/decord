// Module ID: 9999
// Function ID: 10000
// Name: UID
// Dependencies: [6161, 5739, 2]
// Exports: UID, uid, useUID

// Module 9999 (UID)
import reactDefault from "react" /* 5739 */;
import uniqueIdDefault from "uniqueId" /* 6161 */;
import size from "module_2" /* 2 */;

const f97554 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f97554);
}
export function UID(children) {
  return children.children(reactDefault(f97554));
}
