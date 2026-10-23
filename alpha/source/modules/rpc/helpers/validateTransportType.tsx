// Module ID: 15726
// Function ID: 15727
// Name: validateTransportType
// Dependencies: [6376, 1087, 9263, 2]
// Exports: validateTransportType

// Module 15726 (validateTransportType)
import Constants from "Constants" /* 1087 */;
import Constants2 from "Constants" /* 6376 */;
import RPCErrorDefault from "RPCError" /* 9263 */;
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
