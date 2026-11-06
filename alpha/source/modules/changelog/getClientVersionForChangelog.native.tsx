// Module ID: 19734
// Function ID: 19735
// Name: react-native
// Dependencies: [19735, 2]
// Exports: getClientVersionForChangelog

// Module 19734 (react-native)
import react_native from "react-native" /* 19735 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
