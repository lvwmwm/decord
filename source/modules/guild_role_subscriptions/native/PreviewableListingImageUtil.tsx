// Module ID: 16526
// Function ID: 128652
// Name: getSource
// Dependencies: [16527, 2]
// Exports: getSource

// Module 16526 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16527).getSource(imageLocal);
    const obj = importAll(16527);
  }
  return imageLocal;
};
