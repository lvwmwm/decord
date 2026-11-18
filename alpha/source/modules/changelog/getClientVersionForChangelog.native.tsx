// Module ID: 19512
// Function ID: 19513
// Name: react-native
// Dependencies: [19513, 2]
// Exports: getClientVersionForChangelog

// Module 19512 (react-native)
import react_native from "react-native" /* 19513 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
