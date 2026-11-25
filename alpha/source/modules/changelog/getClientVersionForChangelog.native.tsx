// Module ID: 19611
// Function ID: 19612
// Name: react-native
// Dependencies: [19612, 2]
// Exports: getClientVersionForChangelog

// Module 19611 (react-native)
import react_native from "react-native" /* 19612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
