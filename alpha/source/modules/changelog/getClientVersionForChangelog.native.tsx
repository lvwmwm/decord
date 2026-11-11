// Module ID: 20037
// Function ID: 20038
// Name: react-native
// Dependencies: [20038, 2]
// Exports: getClientVersionForChangelog

// Module 20037 (react-native)
import react_native from "react-native" /* 20038 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
