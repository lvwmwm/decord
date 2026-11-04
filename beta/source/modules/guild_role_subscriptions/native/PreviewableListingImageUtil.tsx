// Module ID: 19942
// Function ID: 19943
// Name: PreviewableListingImageUtil
// Dependencies: [19943, 2]
// Exports: getSource

// Module 19942 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19943 */;
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
