// Module ID: 19874
// Function ID: 19875
// Name: PreviewableListingImageUtil
// Dependencies: [19875, 2]
// Exports: getSource

// Module 19874 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19875 */;
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
