// Module ID: 7610
// Function ID: 7611
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7611, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7610 (getAccessibilityLabelOrCheapFallbackUnsafe)
import useIsAccessibilityServiceEnabled from "useIsAccessibilityServiceEnabled" /* 7611 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx");

export const getAccessibilityLabelOrCheapFallbackUnsafe = function getAccessibilityLabelOrCheapFallbackUnsafe(cheap) {
  cheap = cheap.cheap;
  const expensive = cheap.expensive;
  const obj = useIsAccessibilityServiceEnabled;
  if (obj.getIsAccessibilityServiceEnabled()) {
    cheap = expensive();
  }
  return cheap;
};
