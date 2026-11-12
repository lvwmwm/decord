// Module ID: 20565
// Function ID: 20566
// Name: PreviewableListingImageUtil
// Dependencies: [20566, 2]
// Exports: getSource

// Module 20565 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20566 */;
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
