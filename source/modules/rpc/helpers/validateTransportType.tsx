// Module ID: 13864
// Function ID: 13865
// Name: validateTransportType
// Dependencies: [4277, 676, 8752, 2]
// Exports: validateTransportType

// Module 13864 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(8752)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
