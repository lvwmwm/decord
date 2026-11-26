// Module ID: 20728
// Function ID: 20729
// Name: PreviewableListingImageUtil
// Dependencies: [20729, 2]
// Exports: getSource

// Module 20728 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20729 */;
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
