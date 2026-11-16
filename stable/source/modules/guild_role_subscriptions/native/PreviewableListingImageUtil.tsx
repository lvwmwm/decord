// Module ID: 20388
// Function ID: 20389
// Name: PreviewableListingImageUtil
// Dependencies: [20389, 2]
// Exports: getSource

// Module 20388 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20389 */;
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
