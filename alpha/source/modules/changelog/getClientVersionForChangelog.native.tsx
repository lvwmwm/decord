// Module ID: 17779
// Function ID: 17780
// Name: react-native
// Dependencies: [17780, 2]
// Exports: getClientVersionForChangelog

// Module 17779 (react-native)
import react_native from "react-native" /* 17780 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
};
