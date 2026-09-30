// Module ID: 7588
// Function ID: 7589
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7589, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7588 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
