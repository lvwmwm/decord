// Module ID: 19575
// Function ID: 19576
// Name: react-native
// Dependencies: [19576, 2]
// Exports: getClientVersionForChangelog

// Module 19575 (react-native)
import react_native from "react-native" /* 19576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
