// Module ID: 17773
// Function ID: 17774
// Name: PreviewableListingImageUtil
// Dependencies: [17774, 2]
// Exports: getSource

// Module 17773 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17774 */;
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
