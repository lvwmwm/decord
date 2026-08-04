// Module ID: 16682
// Function ID: 16683
// Name: getSource
// Dependencies: [16683, 2]
// Exports: getSource

// Module 16682 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16683).getSource(imageLocal);
    const obj = importAll(16683);
  }
  return imageLocal;
};
