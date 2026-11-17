// Module ID: 9162
// Function ID: 9163
// Name: UID
// Dependencies: [6337, 5911, 2]
// Exports: UID, uid, useUID

// Module 9162 (UID)
import reactDefault from "react" /* 5911 */;
import uniqueIdDefault from "uniqueId" /* 6337 */;
import size from "module_2" /* 2 */;

const f98090 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
export function useUID() {
  return reactDefault(f98090);
}
export function UID(children) {
  return children.children(reactDefault(f98090));
}
