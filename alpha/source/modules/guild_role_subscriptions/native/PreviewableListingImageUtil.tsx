// Module ID: 20270
// Function ID: 20271
// Name: PreviewableListingImageUtil
// Dependencies: [20271, 2]
// Exports: getSource

// Module 20270 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20271 */;
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
