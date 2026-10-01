// Module ID: 7361
// Function ID: 7362
// Name: UID
// Dependencies: [5040, 5910, 2]
// Exports: UID, uid, useUID

// Module 7361 (UID)
import uniqueIdDefault from "uniqueId" /* 5040 */;
import reactDefault from "react" /* 5910 */;
import size from "module_2" /* 2 */;

const f84509 = () => uniqueIdDefault("uid_");
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export const uid = function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
};
export const useUID = function useUID() {
  return reactDefault(f84509);
};
export const UID = function UID(children) {
  return children.children(reactDefault(f84509));
};
