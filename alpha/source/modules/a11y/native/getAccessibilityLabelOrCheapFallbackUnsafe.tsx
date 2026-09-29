// Module ID: 7558
// Function ID: 7559
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7559, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7558 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
