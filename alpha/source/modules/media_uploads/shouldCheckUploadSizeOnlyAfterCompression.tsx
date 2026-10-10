// Module ID: 9705
// Function ID: 9706
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1390, 1989, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 9705 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1989 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
};
