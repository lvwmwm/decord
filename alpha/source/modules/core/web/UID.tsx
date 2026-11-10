// Module ID: 10005
// Function ID: 10006
// Name: UID
// Dependencies: [6163, 5741, 2]
// Exports: UID, uid, useUID

// Module 10005 (UID)
import reactDefault from "react" /* 5741 */;
import uniqueIdDefault from "uniqueId" /* 6163 */;
import size from "module_2" /* 2 */;

const f97674 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f97674);
}
export function UID(children) {
  return children.children(reactDefault(f97674));
}
