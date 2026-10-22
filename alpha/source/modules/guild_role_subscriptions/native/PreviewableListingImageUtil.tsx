// Module ID: 19147
// Function ID: 19148
// Name: PreviewableListingImageUtil
// Dependencies: [19148, 2]
// Exports: getSource

// Module 19147 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19148 */;
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
