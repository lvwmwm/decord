// Module ID: 19272
// Function ID: 19273
// Name: PreviewableListingImageUtil
// Dependencies: [19273, 2]
// Exports: getSource

// Module 19272 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19273 */;
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
