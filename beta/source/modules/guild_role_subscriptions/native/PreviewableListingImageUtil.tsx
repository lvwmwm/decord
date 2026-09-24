// Module ID: 18194
// Function ID: 18195
// Name: PreviewableListingImageUtil
// Dependencies: [18195, 2]
// Exports: getSource

// Module 18194 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18195 */;
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
