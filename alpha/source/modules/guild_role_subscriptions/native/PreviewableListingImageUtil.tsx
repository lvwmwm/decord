// Module ID: 17808
// Function ID: 17809
// Name: PreviewableListingImageUtil
// Dependencies: [17809, 2]
// Exports: getSource

// Module 17808 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = ListingImageUtilAll.getSource(imageLocal);
  }
  return imageLocal;
};
