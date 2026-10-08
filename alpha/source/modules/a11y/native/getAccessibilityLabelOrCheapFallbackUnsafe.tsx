// Module ID: 7868
// Function ID: 7869
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [7869, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 7868 (getAccessibilityLabelOrCheapFallbackUnsafe)
import useIsAccessibilityServiceEnabled from "useIsAccessibilityServiceEnabled" /* 7869 */;
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
