// Module ID: 8209
// Function ID: 8210
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8210, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8209 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
