// Module ID: 20385
// Function ID: 20386
// Name: PreviewableListingImageUtil
// Dependencies: [20386, 2]
// Exports: getSource

// Module 20385 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20386 */;
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
