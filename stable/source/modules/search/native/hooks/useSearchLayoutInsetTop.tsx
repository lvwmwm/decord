// Module ID: 18950
// Function ID: 18951
// Name: useSearchLayoutInsetTop
// Dependencies: [1625, 2]
// Exports: default

// Module 18950 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
