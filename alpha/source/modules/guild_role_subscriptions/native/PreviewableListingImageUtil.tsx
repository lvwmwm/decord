// Module ID: 20723
// Function ID: 20724
// Name: PreviewableListingImageUtil
// Dependencies: [20724, 2]
// Exports: getSource

// Module 20723 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20724 */;
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
