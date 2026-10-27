// Module ID: 19281
// Function ID: 19282
// Name: PreviewableListingImageUtil
// Dependencies: [19282, 2]
// Exports: getSource

// Module 19281 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19282 */;
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
