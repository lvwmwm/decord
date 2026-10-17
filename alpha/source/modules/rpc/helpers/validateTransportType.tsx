// Module ID: 15526
// Function ID: 15527
// Name: validateTransportType
// Dependencies: [5895, 1087, 9169, 2]
// Exports: validateTransportType

// Module 15526 (validateTransportType)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 5895 */;
import RPCErrorDefault from "RPCError" /* 9169 */;
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
