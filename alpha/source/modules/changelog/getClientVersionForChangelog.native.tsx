// Module ID: 18488
// Function ID: 18489
// Name: react-native
// Dependencies: [18489, 2]
// Exports: getClientVersionForChangelog

// Module 18488 (react-native)
import react_native from "react-native" /* 18489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
