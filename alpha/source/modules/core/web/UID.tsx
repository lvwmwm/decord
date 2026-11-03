// Module ID: 10008
// Function ID: 10009
// Name: UID
// Dependencies: [6149, 5735, 2]
// Exports: UID, uid, useUID

// Module 10008 (UID)
import reactDefault from "react" /* 5735 */;
import uniqueIdDefault from "uniqueId" /* 6149 */;
import size from "module_2" /* 2 */;

const f96125 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f96125);
}
export function UID(children) {
  return children.children(reactDefault(f96125));
}
