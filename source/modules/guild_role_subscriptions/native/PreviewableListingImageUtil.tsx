// Module ID: 16722
// Function ID: 16723
// Name: getSource
// Dependencies: [16723, 2]
// Exports: getSource

// Module 16722 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16723).getSource(imageLocal);
    const obj = importAll(16723);
  }
  return imageLocal;
};
