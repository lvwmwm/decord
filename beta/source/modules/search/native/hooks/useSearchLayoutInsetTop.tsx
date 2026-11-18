// Module ID: 19736
// Function ID: 19737
// Name: useSearchLayoutInsetTop
// Dependencies: [1630, 2]
// Exports: default

// Module 19736 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
