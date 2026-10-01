// Module ID: 14058
// Function ID: 14059
// Name: validateTransportType
// Dependencies: [4739, 1074, 8770, 2]
// Exports: validateTransportType

// Module 14058 (validateTransportType)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4739 */;
import RPCErrorDefault from "RPCError" /* 8770 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const self = this;
      const self2 = this;
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Invalid transport.");
      throw tmp5;
    }
  }
};
