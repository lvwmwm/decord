// Module ID: 7433
// Function ID: 7434
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1372, 1970, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 7433 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
};
