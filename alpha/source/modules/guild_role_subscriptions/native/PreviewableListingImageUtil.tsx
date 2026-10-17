// Module ID: 18941
// Function ID: 18942
// Name: PreviewableListingImageUtil
// Dependencies: [18942, 2]
// Exports: getSource

// Module 18941 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18942 */;
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
