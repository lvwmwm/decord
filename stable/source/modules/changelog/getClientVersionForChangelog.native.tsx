// Module ID: 19857
// Function ID: 19858
// Name: react-native
// Dependencies: [19858, 2]
// Exports: getClientVersionForChangelog

// Module 19857 (react-native)
import react_native from "react-native" /* 19858 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
