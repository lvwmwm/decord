// Module ID: 13553
// Function ID: 13554
// Name: validateTransportType
// Dependencies: [4092, 676, 10626, 2]
// Exports: validateTransportType

// Module 13553 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10626)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
