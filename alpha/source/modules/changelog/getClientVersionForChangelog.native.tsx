// Module ID: 19673
// Function ID: 19674
// Name: react-native
// Dependencies: [19674, 2]
// Exports: getClientVersionForChangelog

// Module 19673 (react-native)
import react_native from "react-native" /* 19674 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
