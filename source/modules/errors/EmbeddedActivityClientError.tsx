// Module ID: 10770
// Function ID: 10771
// Name: prototype
// Dependencies: [2]

// Module 10770 (prototype)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/errors/EmbeddedActivityClientError.tsx");
const prototype = function EmbeddedActivityClientError(reason, detailCode) {
  const obj = Object.create(new.target.prototype);
  obj.reason = reason;
  obj.detailCode = detailCode;
  return obj;
}.prototype;
prototype.Reasons = { PRIMARY_APP_COMMAND_NOT_FOUND: 0, [0]: "PRIMARY_APP_COMMAND_NOT_FOUND", LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED: 1, [1]: "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED", INVALID_CHANNEL: 2, [2]: "INVALID_CHANNEL" };

export default prototype;
