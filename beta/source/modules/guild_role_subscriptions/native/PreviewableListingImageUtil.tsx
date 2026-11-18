// Module ID: 20726
// Function ID: 20727
// Name: PreviewableListingImageUtil
// Dependencies: [20727, 2]
// Exports: getSource

// Module 20726 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20727 */;
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
