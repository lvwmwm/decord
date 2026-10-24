// Module ID: 19267
// Function ID: 19268
// Name: PreviewableListingImageUtil
// Dependencies: [19268, 2]
// Exports: getSource

// Module 19267 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19268 */;
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
