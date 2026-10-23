// Module ID: 19214
// Function ID: 19215
// Name: PreviewableListingImageUtil
// Dependencies: [19215, 2]
// Exports: getSource

// Module 19214 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19215 */;
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
