// Module ID: 17305
// Function ID: 17306
// Name: getSource
// Dependencies: [17306, 2]
// Exports: getSource

// Module 17305 (getSource)
import set from "set" /* 2 */;
import getSourceAll from "getSource" /* 17306 */;

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
