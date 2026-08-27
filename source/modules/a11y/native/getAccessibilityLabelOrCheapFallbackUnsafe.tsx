// Module ID: 7793
// Function ID: 7794
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7794, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7793 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
