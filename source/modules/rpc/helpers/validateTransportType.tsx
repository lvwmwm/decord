// Module ID: 13929
// Function ID: 13930
// Name: validateTransportType
// Dependencies: [4281, 676, 8789, 2]
// Exports: validateTransportType

// Module 13929 (validateTransportType)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4281 */;
import prototypeDefault from "prototype" /* 8789 */;

const TransportTypes = RPC_SCOPE_CONFIG.TransportTypes;
const RPCErrors = ME.RPCErrors;
const result = set.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: null };
      obj[0] = RPCErrors.INVALID_COMMAND;
      const tmp7 = new prototypeDefault(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
