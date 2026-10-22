// Module ID: 19170
// Function ID: 19171
// Name: PreviewableListingImageUtil
// Dependencies: [19171, 2]
// Exports: getSource

// Module 19170 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19171 */;
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
