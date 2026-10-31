// Module ID: 19935
// Function ID: 19936
// Name: PreviewableListingImageUtil
// Dependencies: [19936, 2]
// Exports: getSource

// Module 19935 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19936 */;
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
