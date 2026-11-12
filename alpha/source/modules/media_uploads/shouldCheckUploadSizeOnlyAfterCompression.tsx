// Module ID: 8957
// Function ID: 8958
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1385, 2107, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 8957 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
