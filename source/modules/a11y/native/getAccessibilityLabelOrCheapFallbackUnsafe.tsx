// Module ID: 8279
// Function ID: 8280
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8280, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8279 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
