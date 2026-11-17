// Module ID: 20241
// Function ID: 20242
// Name: react-native
// Dependencies: [20242, 2]
// Exports: getClientVersionForChangelog

// Module 20241 (react-native)
import react_native from "react-native" /* 20242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
