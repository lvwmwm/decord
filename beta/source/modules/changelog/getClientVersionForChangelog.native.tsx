// Module ID: 20196
// Function ID: 20197
// Name: react-native
// Dependencies: [20197, 2]
// Exports: getClientVersionForChangelog

// Module 20196 (react-native)
import react_native from "react-native" /* 20197 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
