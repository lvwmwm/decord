// Module ID: 20009
// Function ID: 20010
// Name: PreviewableListingImageUtil
// Dependencies: [20010, 2]
// Exports: getSource

// Module 20009 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20010 */;
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
