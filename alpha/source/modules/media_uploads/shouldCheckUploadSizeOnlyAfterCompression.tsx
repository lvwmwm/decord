// Module ID: 10781
// Function ID: 10782
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1387, 2109, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10781 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2109 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
