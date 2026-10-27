// Module ID: 6382
// Function ID: 6383
// Name: ClientOutdatedAcceptGiftError
// Dependencies: [1084, 2]

// Module 6382 (ClientOutdatedAcceptGiftError)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const AbortCodes = Constants.AbortCodes;
class ClientOutdatedAcceptGiftError extends Error {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    return applyArgumentsResult;
  }
}
const result = size.fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default ClientOutdatedAcceptGiftError;
