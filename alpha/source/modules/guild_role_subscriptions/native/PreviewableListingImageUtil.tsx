// Module ID: 18824
// Function ID: 18825
// Name: PreviewableListingImageUtil
// Dependencies: [18825, 2]
// Exports: getSource

// Module 18824 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18825 */;
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
