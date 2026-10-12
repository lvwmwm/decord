// Module ID: 18062
// Function ID: 18063
// Name: react-native
// Dependencies: [18063, 2]
// Exports: getClientVersionForChangelog

// Module 18062 (react-native)
import react_native from "react-native" /* 18063 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
