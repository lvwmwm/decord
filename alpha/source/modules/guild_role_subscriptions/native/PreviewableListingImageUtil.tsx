// Module ID: 20208
// Function ID: 20209
// Name: PreviewableListingImageUtil
// Dependencies: [20209, 2]
// Exports: getSource

// Module 20208 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20209 */;
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
