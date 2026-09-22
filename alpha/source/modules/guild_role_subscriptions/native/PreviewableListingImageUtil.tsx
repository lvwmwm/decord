// Module ID: 18192
// Function ID: 18193
// Name: PreviewableListingImageUtil
// Dependencies: [18193, 2]
// Exports: getSource

// Module 18192 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18193 */;
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
