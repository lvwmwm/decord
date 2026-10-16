// Module ID: 18879
// Function ID: 18880
// Name: PreviewableListingImageUtil
// Dependencies: [18880, 2]
// Exports: getSource

// Module 18879 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18880 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    const obj = ListingImageUtilAll;
    imageLocal = obj.getSource(imageLocal);
  }
  return imageLocal;
};
