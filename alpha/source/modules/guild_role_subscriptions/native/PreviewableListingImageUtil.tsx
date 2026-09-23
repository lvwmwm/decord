// Module ID: 18261
// Function ID: 18262
// Name: PreviewableListingImageUtil
// Dependencies: [18262, 2]
// Exports: getSource

// Module 18261 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18262 */;
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
