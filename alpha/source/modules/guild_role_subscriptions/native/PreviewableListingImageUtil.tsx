// Module ID: 18487
// Function ID: 18488
// Name: PreviewableListingImageUtil
// Dependencies: [18488, 2]
// Exports: getSource

// Module 18487 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18488 */;
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
