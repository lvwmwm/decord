// Module ID: 16463
// Function ID: 128276
// Name: getSource
// Dependencies: [16464, 2]
// Exports: getSource

// Module 16463 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16464).getSource(imageLocal);
    const obj = importAll(16464);
  }
  return imageLocal;
};
