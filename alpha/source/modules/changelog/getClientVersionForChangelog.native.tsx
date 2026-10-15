// Module ID: 18342
// Function ID: 18343
// Name: react-native
// Dependencies: [18343, 2]
// Exports: getClientVersionForChangelog

// Module 18342 (react-native)
import react_native from "react-native" /* 18343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
