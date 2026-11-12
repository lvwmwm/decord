// Module ID: 20032
// Function ID: 20033
// Name: react-native
// Dependencies: [20033, 2]
// Exports: getClientVersionForChangelog

// Module 20032 (react-native)
import react_native from "react-native" /* 20033 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
