// Module ID: 19271
// Function ID: 19272
// Name: PreviewableListingImageUtil
// Dependencies: [19272, 2]
// Exports: getSource

// Module 19271 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19272 */;
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
