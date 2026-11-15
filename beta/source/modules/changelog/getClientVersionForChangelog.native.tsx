// Module ID: 19862
// Function ID: 19863
// Name: react-native
// Dependencies: [19863, 2]
// Exports: getClientVersionForChangelog

// Module 19862 (react-native)
import react_native from "react-native" /* 19863 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
