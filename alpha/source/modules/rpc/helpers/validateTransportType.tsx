// Module ID: 16994
// Function ID: 16995
// Name: validateTransportType
// Dependencies: [6759, 1072, 7313, 2]
// Exports: validateTransportType

// Module 16994 (validateTransportType)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 6759 */;
import RPCErrorDefault from "RPCError" /* 7313 */;
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
