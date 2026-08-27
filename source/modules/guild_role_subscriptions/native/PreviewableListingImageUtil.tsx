// Module ID: 17218
// Function ID: 17219
// Name: getSource
// Dependencies: [17219, 2]
// Exports: getSource

// Module 17218 (getSource)
import set from "set" /* 2 */;
import getSourceAll from "getSource" /* 17219 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = getSourceAll.getSource(imageLocal);
    const obj = getSourceAll;
  }
  return imageLocal;
};
