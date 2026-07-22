// Module ID: 10952
// Function ID: 85180
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: []
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 10952 (getGiftIntentCustomMessagePlaceholder)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = require(dependencyMap[0]).intl;
  return intl.string(require(dependencyMap[0]).t.OrwKgi);
};
