// Module ID: 17109
// Function ID: 17110
// Name: react-native
// Dependencies: [17110, 2]
// Exports: getClientVersionForChangelog

// Module 17109 (react-native)
import react_native from "react-native" /* 17110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
