// Module ID: 18549
// Function ID: 18550
// Name: PreviewableListingImageUtil
// Dependencies: [18550, 2]
// Exports: getSource

// Module 18549 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18550 */;
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
