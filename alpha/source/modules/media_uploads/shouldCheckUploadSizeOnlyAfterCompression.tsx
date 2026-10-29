// Module ID: 10169
// Function ID: 10170
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1389, 1989, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10169 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
