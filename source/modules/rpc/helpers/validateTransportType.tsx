// Module ID: 13691
// Function ID: 13692
// Name: validateTransportType
// Dependencies: [4205, 676, 10670, 2]
// Exports: validateTransportType

// Module 13691 (validateTransportType)
import { TransportTypes } from "RPC_SCOPE_CONFIG";
import { RPCErrors } from "ME";

const result = require("prototype").fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new importDefault(10670)(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
