// Module ID: 18760
// Function ID: 18761
// Name: react-native
// Dependencies: [18761, 2]
// Exports: getClientVersionForChangelog

// Module 18760 (react-native)
import react_native from "react-native" /* 18761 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
