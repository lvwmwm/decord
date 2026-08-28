// Module ID: 7807
// Function ID: 7808
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7808, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7807 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
