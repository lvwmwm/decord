// Module ID: 9877
// Function ID: 9878
// Name: UID
// Dependencies: [6029, 5612, 2]
// Exports: UID, uid, useUID

// Module 9877 (UID)
import reactDefault from "react" /* 5612 */;
import uniqueIdDefault from "uniqueId" /* 6029 */;
import size from "module_2" /* 2 */;

const f95794 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f95794);
}
export function UID(children) {
  return children.children(reactDefault(f95794));
}
