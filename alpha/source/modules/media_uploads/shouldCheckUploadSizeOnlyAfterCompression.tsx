// Module ID: 9024
// Function ID: 9025
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1388, 2110, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 9024 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
