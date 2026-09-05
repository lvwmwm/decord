// Module ID: 7951
// Function ID: 7952
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7952, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7951 (getAccessibilityLabelOrCheapFallbackUnsafe)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
