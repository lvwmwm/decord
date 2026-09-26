// Module ID: 18185
// Function ID: 18186
// Name: PreviewableListingImageUtil
// Dependencies: [18186, 2]
// Exports: getSource

// Module 18185 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18186 */;
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
