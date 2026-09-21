// Module ID: 18183
// Function ID: 18184
// Name: PreviewableListingImageUtil
// Dependencies: [18184, 2]
// Exports: getSource

// Module 18183 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18184 */;
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
