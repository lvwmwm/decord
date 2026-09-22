// Module ID: 17838
// Function ID: 17839
// Name: PreviewableListingImageUtil
// Dependencies: [17839, 2]
// Exports: getSource

// Module 17838 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17839 */;
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
