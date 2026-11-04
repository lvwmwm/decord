// Module ID: 10392
// Function ID: 10393
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1385, 2112, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10392 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2112 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
