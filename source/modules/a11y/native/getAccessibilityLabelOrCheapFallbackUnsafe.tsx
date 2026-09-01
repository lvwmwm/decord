// Module ID: 7860
// Function ID: 7861
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7861, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7860 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
