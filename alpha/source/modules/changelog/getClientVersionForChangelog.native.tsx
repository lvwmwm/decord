// Module ID: 19455
// Function ID: 19456
// Name: react-native
// Dependencies: [19456, 2]
// Exports: getClientVersionForChangelog

// Module 19455 (react-native)
import react_native from "react-native" /* 19456 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
