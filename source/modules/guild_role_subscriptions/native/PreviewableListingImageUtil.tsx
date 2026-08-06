// Module ID: 16702
// Function ID: 16703
// Name: getSource
// Dependencies: [16703, 2]
// Exports: getSource

// Module 16702 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16703).getSource(imageLocal);
    const obj = importAll(16703);
  }
  return imageLocal;
};
