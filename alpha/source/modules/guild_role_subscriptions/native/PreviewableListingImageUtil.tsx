// Module ID: 19815
// Function ID: 19816
// Name: PreviewableListingImageUtil
// Dependencies: [19816, 2]
// Exports: getSource

// Module 19815 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19816 */;
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
