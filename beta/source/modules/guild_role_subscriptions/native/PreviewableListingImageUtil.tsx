// Module ID: 19309
// Function ID: 19310
// Name: PreviewableListingImageUtil
// Dependencies: [19310, 2]
// Exports: getSource

// Module 19309 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19310 */;
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
