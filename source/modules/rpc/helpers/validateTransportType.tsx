// Module ID: 13763
// Function ID: 13764
// Name: validateTransportType
// Dependencies: [4206, 676, 10737, 2]
// Exports: validateTransportType

// Module 13763 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10737)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
