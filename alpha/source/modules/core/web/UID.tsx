// Module ID: 10064
// Function ID: 10065
// Name: UID
// Dependencies: [6167, 5751, 2]
// Exports: UID, uid, useUID

// Module 10064 (UID)
import reactDefault from "react" /* 5751 */;
import uniqueIdDefault from "uniqueId" /* 6167 */;
import size from "module_2" /* 2 */;

const f97054 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f97054);
}
export function UID(children) {
  return children.children(reactDefault(f97054));
}
