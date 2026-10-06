// Module ID: 17964
// Function ID: 17965
// Name: PreviewableListingImageUtil
// Dependencies: [17965, 2]
// Exports: getSource

// Module 17964 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17965 */;
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
