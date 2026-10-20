// Module ID: 18980
// Function ID: 18981
// Name: PreviewableListingImageUtil
// Dependencies: [18981, 2]
// Exports: getSource

// Module 18980 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18981 */;
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
