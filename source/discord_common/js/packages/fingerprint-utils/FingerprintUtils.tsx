// Module ID: 490
// Function ID: 6416
// Name: extractId
// Dependencies: [2]
// Exports: maybeExtractId

// Module 490 (extractId)
function extractId(arg0) {
  return arg0.split(".")[0];
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx");

export { extractId };
export const maybeExtractId = function maybeExtractId(installationForTracking) {
  let tmp = null;
  if (null != installationForTracking) {
    tmp = extractId(installationForTracking);
  }
  return tmp;
};
