// Module ID: 19816
// Function ID: 19817
// Name: react-native
// Dependencies: [19817, 2]
// Exports: getClientVersionForChangelog

// Module 19816 (react-native)
import react_native from "react-native" /* 19817 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
