// Module ID: 16283
// Function ID: 125675
// Name: getSource
// Dependencies: []
// Exports: getSource

// Module 16283 (getSource)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(dependencyMap[0]).getSource(imageLocal);
    const obj = importAll(dependencyMap[0]);
  }
  return imageLocal;
};
