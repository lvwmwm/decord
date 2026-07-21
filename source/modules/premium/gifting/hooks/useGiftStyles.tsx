// Module ID: 8773
// Function ID: 69317
// Name: useGiftStyles
// Dependencies: []
// Exports: useGiftStyles

// Module 8773 (useGiftStyles)
const PremiumGiftStyles = require(dependencyMap[0]).PremiumGiftStyles;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};
