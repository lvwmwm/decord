// Module ID: 510
// Function ID: 511
// Name: extractId
// Dependencies: [2]
// Exports: extractId, maybeExtractId

// Module 510 (extractId)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx");

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
