// Module ID: 8661
// Function ID: 8662
// Name: UID
// Dependencies: [5931, 5492, 2]
// Exports: UID, uid, useUID

// Module 8661 (UID)
import reactDefault from "react" /* 5492 */;
import uniqueIdDefault from "uniqueId" /* 5931 */;
import size from "module_2" /* 2 */;

const f93870 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f93870);
}
export function UID(children) {
  return children.children(reactDefault(f93870));
}
