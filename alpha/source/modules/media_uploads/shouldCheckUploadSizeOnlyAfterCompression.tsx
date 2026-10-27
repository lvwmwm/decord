// Module ID: 10104
// Function ID: 10105
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1389, 1988, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10104 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
};
