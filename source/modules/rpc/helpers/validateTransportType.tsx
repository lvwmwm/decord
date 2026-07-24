// Module ID: 13474
// Function ID: 103575
// Name: validateTransportType
// Dependencies: [4033, 653, 10525, 2]
// Exports: validateTransportType

// Module 13474 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      let tmp4 = importDefault(10525);
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Invalid transport.");
      throw tmp4;
    }
  }
};
