// Module ID: 16880
// Function ID: 16881
// Name: getSource
// Dependencies: [16881, 2]
// Exports: getSource

// Module 16880 (getSource)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16881).getSource(imageLocal);
    const obj = importAll(16881);
  }
  return imageLocal;
};
