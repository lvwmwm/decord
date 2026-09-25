// Module ID: 17515
// Function ID: 17516
// Name: PreviewableListingImageUtil
// Dependencies: [17516, 2]
// Exports: getSource

// Module 17515 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17516 */;
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
