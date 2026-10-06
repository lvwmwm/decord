// Module ID: 14060
// Function ID: 14061
// Name: validateTransportType
// Dependencies: [4741, 1086, 8765, 2]
// Exports: validateTransportType

// Module 14060 (validateTransportType)
import Constants from "Constants" /* 1086 */;
import Constants2 from "Constants" /* 4741 */;
import RPCErrorDefault from "RPCError" /* 8765 */;
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
