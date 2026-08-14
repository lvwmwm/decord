// Module ID: 13832
// Function ID: 13833
// Name: validateTransportType
// Dependencies: [4245, 676, 10727, 2]
// Exports: validateTransportType

// Module 13832 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10727)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
