// Module ID: 16808
// Function ID: 16809
// Name: getSource
// Dependencies: [16809, 2]
// Exports: getSource

// Module 16808 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16809).getSource(imageLocal);
    const obj = importAll(16809);
  }
  return imageLocal;
};
