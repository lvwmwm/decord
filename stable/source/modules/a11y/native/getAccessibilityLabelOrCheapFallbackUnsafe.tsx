// Module ID: 8055
// Function ID: 8056
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8056, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8055 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
