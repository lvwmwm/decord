// Module ID: 17933
// Function ID: 17934
// Name: react-native
// Dependencies: [17934, 2]
// Exports: getClientVersionForChangelog

// Module 17933 (react-native)
import react_native from "react-native" /* 17934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
