// Module ID: 16650
// Function ID: 16651
// Name: getSource
// Dependencies: [16651, 2]
// Exports: getSource

// Module 16650 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16651).getSource(imageLocal);
    const obj = importAll(16651);
  }
  return imageLocal;
};
