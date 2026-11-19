// Module ID: 19508
// Function ID: 19509
// Name: react-native
// Dependencies: [19509, 2]
// Exports: getClientVersionForChangelog

// Module 19508 (react-native)
import react_native from "react-native" /* 19509 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
