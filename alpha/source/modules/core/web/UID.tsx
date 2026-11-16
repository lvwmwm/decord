// Module ID: 9151
// Function ID: 9152
// Name: UID
// Dependencies: [6329, 5907, 2]
// Exports: UID, uid, useUID

// Module 9151 (UID)
import reactDefault from "react" /* 5907 */;
import uniqueIdDefault from "uniqueId" /* 6329 */;
import size from "module_2" /* 2 */;

const f97888 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f97888);
}
export function UID(children) {
  return children.children(reactDefault(f97888));
}
