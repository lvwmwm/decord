// Module ID: 20258
// Function ID: 20259
// Name: PreviewableListingImageUtil
// Dependencies: [20259, 2]
// Exports: getSource

// Module 20258 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20259 */;
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
