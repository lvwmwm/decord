// Module ID: 8268
// Function ID: 8269
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8269, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8268 (getAccessibilityLabelOrCheapFallbackUnsafe)
import useIsAccessibilityServiceEnabled from "useIsAccessibilityServiceEnabled" /* 8269 */;
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
