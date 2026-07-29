// Module ID: 513
// Function ID: 514
// Name: extractId
// Dependencies: [2]
// Exports: extractId, maybeExtractId

// Module 513 (extractId)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx");

export const extractId = function extractId(fingerprint) {
  return fingerprint.split(".")[0];
};
export const maybeExtractId = function maybeExtractId(installationForTracking) {
  let first = null;
  if (null != installationForTracking) {
    first = installationForTracking.split(".")[0];
  }
  return first;
};
