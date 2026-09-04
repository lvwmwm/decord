// Module ID: 13563
// Function ID: 13564
// Name: getCachedUseAltGateway
// Dependencies: [13564, 2]
// Exports: default

// Module 13563 (getCachedUseAltGateway)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 13564 */;

const result = set.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = enforcingDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
