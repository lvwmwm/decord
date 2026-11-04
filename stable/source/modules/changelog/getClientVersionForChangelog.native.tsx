// Module ID: 18797
// Function ID: 18798
// Name: react-native
// Dependencies: [18798, 2]
// Exports: getClientVersionForChangelog

// Module 18797 (react-native)
import react_native from "react-native" /* 18798 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
