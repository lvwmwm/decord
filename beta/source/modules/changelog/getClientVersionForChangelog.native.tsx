// Module ID: 19412
// Function ID: 19413
// Name: react-native
// Dependencies: [19413, 2]
// Exports: getClientVersionForChangelog

// Module 19412 (react-native)
import react_native from "react-native" /* 19413 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
