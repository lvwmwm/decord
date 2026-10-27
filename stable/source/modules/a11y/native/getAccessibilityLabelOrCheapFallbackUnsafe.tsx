// Module ID: 8163
// Function ID: 8164
// Name: getAccessibilityLabelOrCheapFallbackUnsafe
// Dependencies: [8164, 2]
// Exports: getAccessibilityLabelOrCheapFallbackUnsafe

// Module 8163 (getAccessibilityLabelOrCheapFallbackUnsafe)
import useIsAccessibilityServiceEnabled from "useIsAccessibilityServiceEnabled" /* 8164 */;
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
