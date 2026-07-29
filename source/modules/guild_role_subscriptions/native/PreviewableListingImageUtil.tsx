// Module ID: 16561
// Function ID: 16562
// Name: getSource
// Dependencies: [16562, 2]
// Exports: getSource

// Module 16561 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16562).getSource(imageLocal);
    const obj = importAll(16562);
  }
  return imageLocal;
};
