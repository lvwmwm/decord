// Module ID: 13445
// Function ID: 13446
// Name: react-native
// Dependencies: [13446, 2]
// Exports: default

// Module 13445 (react-native)
import react_nativeDefault from "react-native" /* 13446 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  const obj = react_nativeDefault;
  let flag = obj.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
