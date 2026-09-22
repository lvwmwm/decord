// Module ID: 13909
// Function ID: 13910
// Name: getCachedUseAltGateway
// Dependencies: [13910, 2]
// Exports: default

// Module 13909 (getCachedUseAltGateway)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13910 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = NativeFastConnectModuleDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
