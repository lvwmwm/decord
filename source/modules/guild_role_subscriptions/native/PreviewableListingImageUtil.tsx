// Module ID: 16416
// Function ID: 127952
// Name: getSource
// Dependencies: [16417, 2]
// Exports: getSource

// Module 16416 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16417).getSource(imageLocal);
    const obj = importAll(16417);
  }
  return imageLocal;
};
