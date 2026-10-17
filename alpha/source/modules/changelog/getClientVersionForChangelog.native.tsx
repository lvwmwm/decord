// Module ID: 18455
// Function ID: 18456
// Name: react-native
// Dependencies: [18456, 2]
// Exports: getClientVersionForChangelog

// Module 18455 (react-native)
import react_native from "react-native" /* 18456 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
