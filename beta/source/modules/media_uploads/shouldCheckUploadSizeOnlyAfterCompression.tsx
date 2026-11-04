// Module ID: 10214
// Function ID: 10215
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1383, 1983, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10214 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
