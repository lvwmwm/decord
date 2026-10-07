// Module ID: 17470
// Function ID: 17471
// Name: react-native
// Dependencies: [17471, 2]
// Exports: getClientVersionForChangelog

// Module 17470 (react-native)
import react_native from "react-native" /* 17471 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
