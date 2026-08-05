// Module ID: 4160
// Function ID: 4161
// Name: prototype
// Dependencies: [676, 2]

// Module 4160 (prototype)
import { AbortCodes } from "ME";

const prototype = function ClientOutdatedAcceptGiftError(arg0) {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.code = AbortCodes.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
  return applyArgumentsResult;
}.prototype;
class prototype extends Error {
}
const result = require("set").fileFinishedImporting("errors/ClientOutdatedAcceptGiftError.tsx");

export default prototype;
