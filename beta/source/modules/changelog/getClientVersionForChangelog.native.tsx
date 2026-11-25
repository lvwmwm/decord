// Module ID: 19466
// Function ID: 19467
// Name: react-native
// Dependencies: [19467, 2]
// Exports: getClientVersionForChangelog

// Module 19466 (react-native)
import react_native from "react-native" /* 19467 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
