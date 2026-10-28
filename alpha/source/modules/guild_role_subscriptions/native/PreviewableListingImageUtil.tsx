// Module ID: 19582
// Function ID: 19583
// Name: PreviewableListingImageUtil
// Dependencies: [19583, 2]
// Exports: getSource

// Module 19582 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19583 */;
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
