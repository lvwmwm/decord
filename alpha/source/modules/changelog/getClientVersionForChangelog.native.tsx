// Module ID: 18759
// Function ID: 18760
// Name: react-native
// Dependencies: [18760, 2]
// Exports: getClientVersionForChangelog

// Module 18759 (react-native)
import react_native from "react-native" /* 18760 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
