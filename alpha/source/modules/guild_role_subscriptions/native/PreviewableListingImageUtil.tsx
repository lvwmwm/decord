// Module ID: 18585
// Function ID: 18586
// Name: PreviewableListingImageUtil
// Dependencies: [18586, 2]
// Exports: getSource

// Module 18585 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 18586 */;
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
