// Module ID: 19457
// Function ID: 19458
// Name: react-native
// Dependencies: [19458, 2]
// Exports: getClientVersionForChangelog

// Module 19457 (react-native)
import react_native from "react-native" /* 19458 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
