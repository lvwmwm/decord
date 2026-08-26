// Module ID: 16293
// Function ID: 16294
// Name: useSearchLayoutInsetTop
// Dependencies: [1629, 2]
// Exports: default

// Module 16293 (useSearchLayoutInsetTop)
import set from "set" /* 2 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
