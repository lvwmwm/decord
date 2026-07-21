// Module ID: 13300
// Function ID: 101059
// Name: validateTransportType
// Dependencies: []
// Exports: validateTransportType

// Module 13300 (validateTransportType)
const TransportTypes = require(dependencyMap[0]).TransportTypes;
const RPCErrors = require(dependencyMap[1]).RPCErrors;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/rpc/helpers/validateTransportType.tsx");

export const validateTransportType = function validateTransportType(transport) {
  if (TransportTypes.IPC !== transport) {
    if (TransportTypes.POST_MESSAGE !== transport) {
      let tmp4 = importDefault(dependencyMap[2]);
      const obj = { errorCode: RPCErrors.INVALID_COMMAND };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Invalid transport.");
      throw tmp4;
    }
  }
};
