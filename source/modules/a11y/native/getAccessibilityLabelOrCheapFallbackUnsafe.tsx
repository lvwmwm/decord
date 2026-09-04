// Module ID: 7882
// Function ID: 7883
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7883, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7882 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
