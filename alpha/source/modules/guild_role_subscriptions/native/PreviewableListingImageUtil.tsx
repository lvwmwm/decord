// Module ID: 17738
// Function ID: 17739
// Name: PreviewableListingImageUtil
// Dependencies: [17739, 2]
// Exports: getSource

// Module 17738 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17739 */;
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
