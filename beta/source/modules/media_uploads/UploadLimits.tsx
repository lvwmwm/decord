// Module ID: 5412
// Function ID: 5413
// Name: UploadLimits
// Dependencies: [2]
// Exports: getEffectiveUploadLimit

// Module 5412 (UploadLimits)
import size from "module_2" /* 2 */;

let c0 = 20971520;
const result = size.fileFinishedImporting("modules/media_uploads/UploadLimits.tsx");

export const FREE_UPLOAD_LIMIT_BYTES = 20971520;
export const getEffectiveUploadLimit = function getEffectiveUploadLimit(maxFileSizeResult) {
  return Math.max(c0, maxFileSizeResult);
};
