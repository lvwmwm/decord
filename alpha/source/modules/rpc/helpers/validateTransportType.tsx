// Module ID: 16252
// Function ID: 16253
// Name: validateTransportType
// Dependencies: [6437, 1084, 9300, 2]
// Exports: validateTransportType

// Module 16252 (validateTransportType)
import Constants from "Constants" /* 1084 */;
import Constants2 from "Constants" /* 6437 */;
import RPCErrorDefault from "RPCError" /* 9300 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const self = this;
      const self2 = this;
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Invalid transport.");
      throw tmp5;
    }
  }
}
