// Module ID: 19679
// Function ID: 19680
// Name: react-native
// Dependencies: [19680, 2]
// Exports: getClientVersionForChangelog

// Module 19679 (react-native)
import react_native from "react-native" /* 19680 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
