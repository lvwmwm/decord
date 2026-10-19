// Module ID: 18459
// Function ID: 18460
// Name: react-native
// Dependencies: [18460, 2]
// Exports: getClientVersionForChangelog

// Module 18459 (react-native)
import react_native from "react-native" /* 18460 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
