// Module ID: 10734
// Function ID: 10735
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1386, 2108, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10734 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2108 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
