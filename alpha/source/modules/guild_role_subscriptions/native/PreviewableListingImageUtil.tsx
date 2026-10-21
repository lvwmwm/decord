// Module ID: 19080
// Function ID: 19081
// Name: PreviewableListingImageUtil
// Dependencies: [19081, 2]
// Exports: getSource

// Module 19080 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19081 */;
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
