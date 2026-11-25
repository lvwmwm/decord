// Module ID: 9028
// Function ID: 9029
// Name: UID
// Dependencies: [6086, 5591, 2]
// Exports: UID, uid, useUID

// Module 9028 (UID)
import reactDefault from "react" /* 5591 */;
import uniqueIdDefault from "uniqueId" /* 6086 */;
import size from "module_2" /* 2 */;

const f94752 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f94752);
}
export function UID(children) {
  return children.children(reactDefault(f94752));
}
