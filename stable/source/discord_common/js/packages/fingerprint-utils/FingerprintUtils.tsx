// Module ID: 1253
// Function ID: 1254
// Name: FingerprintUtils
// Dependencies: [2]
// Exports: extractId, maybeExtractId

// Module 1253 (FingerprintUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx");

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
