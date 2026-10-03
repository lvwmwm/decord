// Module ID: 17446
// Function ID: 17447
// Name: react-native
// Dependencies: [17447, 2]
// Exports: getClientVersionForChangelog

// Module 17446 (react-native)
import react_native from "react-native" /* 17447 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
