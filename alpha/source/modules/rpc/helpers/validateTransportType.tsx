// Module ID: 15631
// Function ID: 15632
// Name: validateTransportType
// Dependencies: [6233, 1072, 6790, 2]
// Exports: validateTransportType

// Module 15631 (validateTransportType)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 6233 */;
import RPCErrorDefault from "RPCError" /* 6790 */;
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
