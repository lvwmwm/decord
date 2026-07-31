// Module ID: 16584
// Function ID: 16585
// Name: getSource
// Dependencies: [16585, 2]
// Exports: getSource

// Module 16584 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16585).getSource(imageLocal);
    const obj = importAll(16585);
  }
  return imageLocal;
};
