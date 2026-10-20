// Module ID: 18066
// Function ID: 18067
// Name: react-native
// Dependencies: [18067, 2]
// Exports: getClientVersionForChangelog

// Module 18066 (react-native)
import react_native from "react-native" /* 18067 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
