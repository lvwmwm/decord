// Module ID: 7869
// Function ID: 7870
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7870, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7869 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
