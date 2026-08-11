// Module ID: 16820
// Function ID: 16821
// Name: getSource
// Dependencies: [16821, 2]
// Exports: getSource

// Module 16820 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16821).getSource(imageLocal);
    const obj = importAll(16821);
  }
  return imageLocal;
};
