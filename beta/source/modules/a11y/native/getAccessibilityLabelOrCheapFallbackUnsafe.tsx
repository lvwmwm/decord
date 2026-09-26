// Module ID: 8241
// Function ID: 8242
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8242, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8241 (getAccessibilityLabelOrCheapFallbackUnsafe)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = cheap.expensive();
  }
  return cheap;
};
