// Module ID: 15916
// Function ID: 15917
// Name: validateTransportType
// Dependencies: [5797, 1071, 7644, 2]
// Exports: validateTransportType

// Module 15916 (validateTransportType)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 5797 */;
import RPCErrorDefault from "RPCError" /* 7644 */;
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
