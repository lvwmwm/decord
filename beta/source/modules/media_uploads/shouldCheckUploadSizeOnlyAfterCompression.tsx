// Module ID: 10134
// Function ID: 10135
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1392, 1991, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10134 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
};
