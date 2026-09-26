// Module ID: 17545
// Function ID: 17546
// Name: PreviewableListingImageUtil
// Dependencies: [17546, 2]
// Exports: getSource

// Module 17545 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17546 */;
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
