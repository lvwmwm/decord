// Module ID: 13515
// Function ID: 13516
// Name: getCachedUseAltGateway
// Dependencies: [13516, 2]
// Exports: default

// Module 13515 (getCachedUseAltGateway)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 13516 */;

const result = set.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = enforcingDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
