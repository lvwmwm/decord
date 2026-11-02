// Module ID: 19417
// Function ID: 19418
// Name: react-native
// Dependencies: [19418, 2]
// Exports: getClientVersionForChangelog

// Module 19417 (react-native)
import react_native from "react-native" /* 19418 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
