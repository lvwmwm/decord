// Module ID: 8212
// Function ID: 8213
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8213, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8212 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
