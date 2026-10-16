// Module ID: 18394
// Function ID: 18395
// Name: react-native
// Dependencies: [18395, 2]
// Exports: getClientVersionForChangelog

// Module 18394 (react-native)
import react_native from "react-native" /* 18395 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
