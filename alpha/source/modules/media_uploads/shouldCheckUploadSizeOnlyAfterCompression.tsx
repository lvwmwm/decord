// Module ID: 10344
// Function ID: 10345
// Name: shouldCheckUploadSizeOnlyAfterCompression
// Dependencies: [1385, 2112, 2]
// Exports: shouldCheckUploadSizeOnlyAfterCompression

// Module 10344 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2112 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  const obj = PremiumTypeUtils;
  return obj.isPremium(UserStore.getCurrentUser());
}
