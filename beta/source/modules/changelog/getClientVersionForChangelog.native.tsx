// Module ID: 20193
// Function ID: 20194
// Name: react-native
// Dependencies: [20194, 2]
// Exports: getClientVersionForChangelog

// Module 20193 (react-native)
import react_native from "react-native" /* 20194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  const obj = react_native;
  return obj.getAppMajorVersion();
}
