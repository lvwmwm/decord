// Module ID: 19693
// Function ID: 19694
// Name: react-native
// Dependencies: [19694, 2]
// Exports: getClientVersionForChangelog

// Module 19693 (react-native)
import react_native from "react-native" /* 19694 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
