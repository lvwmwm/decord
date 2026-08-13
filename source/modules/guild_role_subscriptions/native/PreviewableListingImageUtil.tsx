// Module ID: 16889
// Function ID: 16890
// Name: getSource
// Dependencies: [16890, 2]
// Exports: getSource

// Module 16889 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16890).getSource(imageLocal);
    const obj = importAll(16890);
  }
  return imageLocal;
};
