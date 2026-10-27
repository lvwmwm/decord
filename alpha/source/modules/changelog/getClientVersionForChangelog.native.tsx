// Module ID: 18805
// Function ID: 18806
// Name: react-native
// Dependencies: [18806, 2]
// Exports: getClientVersionForChangelog

// Module 18805 (react-native)
import react_native from "react-native" /* 18806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
