// Module ID: 19353
// Function ID: 19354
// Name: react-native
// Dependencies: [19354, 2]
// Exports: getClientVersionForChangelog

// Module 19353 (react-native)
import react_native from "react-native" /* 19354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
