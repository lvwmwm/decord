// Module ID: 17111
// Function ID: 17112
// Name: react-native
// Dependencies: [17112, 2]
// Exports: getClientVersionForChangelog

// Module 17111 (react-native)
import react_native from "react-native" /* 17112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
