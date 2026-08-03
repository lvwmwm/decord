// Module ID: 12781
// Function ID: 12782
// Name: getCachedUseAltGateway
// Dependencies: [17, 500, 502, 2]
// Exports: default

// Module 12781 (getCachedUseAltGateway)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  if (obj.isAndroid()) {
    let flag2 = importDefault(502).getConstants().useAltGateway;
    if (flag2 == null) {
      flag2 = false;
    }
    let flag = flag2;
    const obj2 = importDefault(502);
  } else {
    flag = NativeModules.DCDFastConnectManager.useAltGateway;
    if (flag == null) {
      flag = false;
    }
  }
  return flag;
};
