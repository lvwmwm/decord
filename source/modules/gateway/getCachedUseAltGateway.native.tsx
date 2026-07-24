// Module ID: 12620
// Function ID: 97568
// Name: getCachedUseAltGateway
// Dependencies: [27, 477, 479, 2]
// Exports: default

// Module 12620 (getCachedUseAltGateway)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  if (obj.isAndroid()) {
    const useAltGateway2 = importDefault(479).getConstants().useAltGateway;
    let tmp3 = null != useAltGateway2 && useAltGateway2;
    const obj2 = importDefault(479);
    const tmp7 = null != useAltGateway2 && useAltGateway2;
  } else {
    const useAltGateway = NativeModules.DCDFastConnectManager.useAltGateway;
    tmp3 = null != useAltGateway && useAltGateway;
  }
  return tmp3;
};
