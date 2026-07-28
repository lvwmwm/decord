// Module ID: 13530
// Function ID: 103880
// Name: validateTransportType
// Dependencies: [4068, 653, 10592, 2]
// Exports: validateTransportType

// Module 13530 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      let tmp4 = importDefault(10592);
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Invalid transport.");
      throw tmp4;
    }
  }
};
