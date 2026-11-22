// Module ID: 15716
// Function ID: 15717
// Name: validateTransportType
// Dependencies: [6354, 1071, 6909, 2]
// Exports: validateTransportType

// Module 15716 (validateTransportType)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 6354 */;
import RPCErrorDefault from "RPCError" /* 6909 */;
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
