// Module ID: 17918
// Function ID: 17919
// Name: PreviewableListingImageUtil
// Dependencies: [17919, 2]
// Exports: getSource

// Module 17918 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17919 */;
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
