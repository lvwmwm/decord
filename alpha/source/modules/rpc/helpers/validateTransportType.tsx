// Module ID: 15648
// Function ID: 15649
// Name: validateTransportType
// Dependencies: [6357, 1087, 9224, 2]
// Exports: validateTransportType

// Module 15648 (validateTransportType)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 6357 */;
import RPCErrorDefault from "RPCError" /* 9224 */;
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
