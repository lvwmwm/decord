// Module ID: 19845
// Function ID: 19846
// Name: react-native
// Dependencies: [19846, 2]
// Exports: getClientVersionForChangelog

// Module 19845 (react-native)
import react_native from "react-native" /* 19846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
