// Module ID: 16555
// Function ID: 16556
// Name: getSource
// Dependencies: [16556, 2]
// Exports: getSource

// Module 16555 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16556).getSource(imageLocal);
    const obj = importAll(16556);
  }
  return imageLocal;
};
