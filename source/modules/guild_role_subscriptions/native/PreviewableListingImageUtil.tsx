// Module ID: 16896
// Function ID: 16897
// Name: getSource
// Dependencies: [16897, 2]
// Exports: getSource

// Module 16896 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16897).getSource(imageLocal);
    const obj = importAll(16897);
  }
  return imageLocal;
};
