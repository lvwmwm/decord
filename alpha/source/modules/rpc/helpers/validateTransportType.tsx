// Module ID: 15119
// Function ID: 15120
// Name: validateTransportType
// Dependencies: [5644, 1085, 11010, 2]
// Exports: validateTransportType

// Module 15119 (validateTransportType)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 5644 */;
import RPCErrorDefault from "RPCError" /* 11010 */;
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
