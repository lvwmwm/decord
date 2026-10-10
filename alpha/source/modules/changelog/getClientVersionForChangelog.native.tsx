// Module ID: 18005
// Function ID: 18006
// Name: react-native
// Dependencies: [18006, 2]
// Exports: getClientVersionForChangelog

// Module 18005 (react-native)
import react_native from "react-native" /* 18006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
