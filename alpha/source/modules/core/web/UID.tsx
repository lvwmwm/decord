// Module ID: 10056
// Function ID: 10057
// Name: UID
// Dependencies: [6164, 5749, 2]
// Exports: UID, uid, useUID

// Module 10056 (UID)
import reactDefault from "react" /* 5749 */;
import uniqueIdDefault from "uniqueId" /* 6164 */;
import size from "module_2" /* 2 */;

const f96752 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f96752);
}
export function UID(children) {
  return children.children(reactDefault(f96752));
}
