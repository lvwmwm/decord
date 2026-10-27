// Module ID: 18769
// Function ID: 18770
// Name: react-native
// Dependencies: [18770, 2]
// Exports: getClientVersionForChangelog

// Module 18769 (react-native)
import react_native from "react-native" /* 18770 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
