// Module ID: 20001
// Function ID: 20002
// Name: PreviewableListingImageUtil
// Dependencies: [20002, 2]
// Exports: getSource

// Module 20001 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20002 */;
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
