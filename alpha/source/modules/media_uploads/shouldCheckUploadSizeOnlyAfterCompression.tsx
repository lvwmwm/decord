// Module ID: 7480
// Function ID: 7481
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1377, 1976, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 7480 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
};
