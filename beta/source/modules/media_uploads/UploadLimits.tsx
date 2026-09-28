// Module ID: 5474
// Function ID: 5475
// Name: UploadLimits
// Dependencies: [2]
// Exports: getEffectiveUploadLimit

// Module 5474 (UploadLimits)
import size from "module_2" /* 2 */;

let c0 = 20971520;
const result = size.fileFinishedImporting("modules/media_uploads/UploadLimits.tsx");

export const FREE_UPLOAD_LIMIT_BYTES = 20971520;
export const getEffectiveUploadLimit = function getEffectiveUploadLimit(maxFileSizeResult) {
  return Math.max(c0, maxFileSizeResult);
};
