// Module ID: 7388
// Function ID: 7389
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7389, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7388 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
