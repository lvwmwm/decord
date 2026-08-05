// Module ID: 16662
// Function ID: 16663
// Name: getSource
// Dependencies: [16663, 2]
// Exports: getSource

// Module 16662 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16663).getSource(imageLocal);
    const obj = importAll(16663);
  }
  return imageLocal;
};
