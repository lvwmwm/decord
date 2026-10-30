// Module ID: 19878
// Function ID: 19879
// Name: PreviewableListingImageUtil
// Dependencies: [19879, 2]
// Exports: getSource

// Module 19878 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    const obj = ListingImageUtilAll;
    imageLocal = obj.getSource(imageLocal);
  }
  return imageLocal;
}
