// Module ID: 19410
// Function ID: 19411
// Name: react-native
// Dependencies: [19411, 2]
// Exports: getClientVersionForChangelog

// Module 19410 (react-native)
import react_native from "react-native" /* 19411 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
