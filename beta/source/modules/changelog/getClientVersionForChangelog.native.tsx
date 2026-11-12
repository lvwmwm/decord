// Module ID: 19854
// Function ID: 19855
// Name: react-native
// Dependencies: [19855, 2]
// Exports: getClientVersionForChangelog

// Module 19854 (react-native)
import react_native from "react-native" /* 19855 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
