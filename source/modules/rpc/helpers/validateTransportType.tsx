// Module ID: 13548
// Function ID: 13549
// Name: validateTransportType
// Dependencies: [4092, 676, 10622, 2]
// Exports: validateTransportType

// Module 13548 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10622)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
