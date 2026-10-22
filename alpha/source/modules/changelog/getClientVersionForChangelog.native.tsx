// Module ID: 18679
// Function ID: 18680
// Name: react-native
// Dependencies: [18680, 2]
// Exports: getClientVersionForChangelog

// Module 18679 (react-native)
import react_native from "react-native" /* 18680 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
