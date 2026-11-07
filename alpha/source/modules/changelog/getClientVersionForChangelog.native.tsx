// Module ID: 19803
// Function ID: 19804
// Name: react-native
// Dependencies: [19804, 2]
// Exports: getClientVersionForChangelog

// Module 19803 (react-native)
import react_native from "react-native" /* 19804 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
