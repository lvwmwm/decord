// Module ID: 8334
// Function ID: 8335
// Name: UploadLimits
// Dependencies: [2]
// Exports: getEffectiveUploadLimit

// Module 8334 (UploadLimits)
import size from "module_2" /* 2 */;

let c0 = 20971520;
const result = size.fileFinishedImporting("modules/media_uploads/UploadLimits.tsx");

export const FREE_UPLOAD_LIMIT_BYTES = 20971520;
export function getEffectiveUploadLimit(maxFileSizeResult) {
  return Math.max(c0, maxFileSizeResult);
}
