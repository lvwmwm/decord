// Module ID: 6357
// Function ID: 6358
// Name: ClientOutdatedAcceptGiftError
// Dependencies: [1071, 2]

// Module 6357 (ClientOutdatedAcceptGiftError)
import Constants from "Constants" /* 1071 */;
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
