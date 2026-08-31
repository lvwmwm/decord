// Module ID: 7828
// Function ID: 7829
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7829, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7828 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
