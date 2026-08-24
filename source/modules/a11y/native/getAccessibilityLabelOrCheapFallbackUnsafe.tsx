// Module ID: 8216
// Function ID: 8217
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8217, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8216 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
