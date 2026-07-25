// Module ID: 16474
// Function ID: 128444
// Name: getSource
// Dependencies: [16475, 2]
// Exports: getSource

// Module 16474 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16475).getSource(imageLocal);
    const obj = importAll(16475);
  }
  return imageLocal;
};
