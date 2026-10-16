// Module ID: 18384
// Function ID: 18385
// Name: react-native
// Dependencies: [18385, 2]
// Exports: getClientVersionForChangelog

// Module 18384 (react-native)
import react_native from "react-native" /* 18385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
