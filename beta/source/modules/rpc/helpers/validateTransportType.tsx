// Module ID: 14780
// Function ID: 14781
// Name: validateTransportType
// Dependencies: [4663, 1078, 9577, 2]
// Exports: validateTransportType

// Module 14780 (validateTransportType)
import Constants from "Constants" /* 1078 */;
import Constants2 from "Constants" /* 4663 */;
import RPCErrorDefault from "RPCError" /* 9577 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants2.TransportTypes;
const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp7 = new RPCErrorDefault(obj, "Invalid transport.");
      throw tmp7;
    }
  }
};
