// Module ID: 19499
// Function ID: 19500
// Name: react-native
// Dependencies: [19500, 2]
// Exports: getClientVersionForChangelog

// Module 19499 (react-native)
import react_native from "react-native" /* 19500 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
