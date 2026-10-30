// Module ID: 10194
// Function ID: 10195
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1384, 1984, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10194 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1984 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
