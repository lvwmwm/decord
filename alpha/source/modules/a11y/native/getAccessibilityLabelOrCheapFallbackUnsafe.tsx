// Module ID: 7393
// Function ID: 7394
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7394, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7393 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
