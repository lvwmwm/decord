// Module ID: 16486
// Function ID: 128491
// Name: getSource
// Dependencies: [16487, 2]
// Exports: getSource

// Module 16486 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16487).getSource(imageLocal);
    const obj = importAll(16487);
  }
  return imageLocal;
};
