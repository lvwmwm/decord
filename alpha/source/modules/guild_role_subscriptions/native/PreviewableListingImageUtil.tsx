// Module ID: 18251
// Function ID: 18252
// Name: PreviewableListingImageUtil
// Dependencies: [18252, 2]
// Exports: getSource

// Module 18251 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18252 */;
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
