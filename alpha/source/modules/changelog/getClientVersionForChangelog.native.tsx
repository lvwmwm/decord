// Module ID: 19290
// Function ID: 19291
// Name: react-native
// Dependencies: [19291, 2]
// Exports: getClientVersionForChangelog

// Module 19290 (react-native)
import react_native from "react-native" /* 19291 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
