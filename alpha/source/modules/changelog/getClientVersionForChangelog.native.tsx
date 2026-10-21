// Module ID: 18589
// Function ID: 18590
// Name: react-native
// Dependencies: [18590, 2]
// Exports: getClientVersionForChangelog

// Module 18589 (react-native)
import react_native from "react-native" /* 18590 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
