// Module ID: 13636
// Function ID: 13637
// Name: getCachedUseAltGateway
// Dependencies: [13637, 2]
// Exports: default

// Module 13636 (getCachedUseAltGateway)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 13637 */;

const result = set.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = enforcingDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
