// Module ID: 19937
// Function ID: 19938
// Name: PreviewableListingImageUtil
// Dependencies: [19938, 2]
// Exports: getSource

// Module 19937 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19938 */;
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
