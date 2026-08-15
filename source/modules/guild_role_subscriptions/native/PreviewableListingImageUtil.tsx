// Module ID: 16942
// Function ID: 16943
// Name: getSource
// Dependencies: [16943, 2]
// Exports: getSource

// Module 16942 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16943).getSource(imageLocal);
    const obj = importAll(16943);
  }
  return imageLocal;
};
