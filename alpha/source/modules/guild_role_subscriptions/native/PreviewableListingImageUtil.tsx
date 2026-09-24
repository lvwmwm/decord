// Module ID: 18284
// Function ID: 18285
// Name: PreviewableListingImageUtil
// Dependencies: [18285, 2]
// Exports: getSource

// Module 18284 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18285 */;
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
