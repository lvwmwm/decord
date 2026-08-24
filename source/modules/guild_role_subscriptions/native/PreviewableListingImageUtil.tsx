// Module ID: 17035
// Function ID: 17036
// Name: getSource
// Dependencies: [17036, 2]
// Exports: getSource

// Module 17035 (getSource)
import set from "set" /* 2 */;
import getSourceAll from "getSource" /* 17036 */;

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
