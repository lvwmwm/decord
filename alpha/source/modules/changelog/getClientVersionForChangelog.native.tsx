// Module ID: 19328
// Function ID: 19329
// Name: react-native
// Dependencies: [19329, 2]
// Exports: getClientVersionForChangelog

// Module 19328 (react-native)
import react_native from "react-native" /* 19329 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
