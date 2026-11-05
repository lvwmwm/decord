// Module ID: 19728
// Function ID: 19729
// Name: react-native
// Dependencies: [19729, 2]
// Exports: getClientVersionForChangelog

// Module 19728 (react-native)
import react_native from "react-native" /* 19729 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
