// Module ID: 13677
// Function ID: 13678
// Name: validateTransportType
// Dependencies: [4188, 676, 10536, 2]
// Exports: validateTransportType

// Module 13677 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10536)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
