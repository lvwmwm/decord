// Module ID: 18657
// Function ID: 18658
// Name: react-native
// Dependencies: [18658, 2]
// Exports: getClientVersionForChangelog

// Module 18657 (react-native)
import react_native from "react-native" /* 18658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
