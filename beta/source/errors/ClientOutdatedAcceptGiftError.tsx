// Module ID: 6618
// Function ID: 6619
// Name: ClientOutdatedAcceptGiftError
// Dependencies: [1072, 2]

// Module 6618 (ClientOutdatedAcceptGiftError)
import Constants from "Constants" /* 1072 */;
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
