// Module ID: 19057
// Function ID: 19058
// Name: react-native
// Dependencies: [19058, 2]
// Exports: getClientVersionForChangelog

// Module 19057 (react-native)
import react_native from "react-native" /* 19058 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
