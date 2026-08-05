// Module ID: 13640
// Function ID: 13641
// Name: validateTransportType
// Dependencies: [4158, 676, 10515, 2]
// Exports: validateTransportType

// Module 13640 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10515)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
