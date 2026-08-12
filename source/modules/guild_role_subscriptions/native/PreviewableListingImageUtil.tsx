// Module ID: 16878
// Function ID: 16879
// Name: getSource
// Dependencies: [16879, 2]
// Exports: getSource

// Module 16878 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16879).getSource(imageLocal);
    const obj = importAll(16879);
  }
  return imageLocal;
};
