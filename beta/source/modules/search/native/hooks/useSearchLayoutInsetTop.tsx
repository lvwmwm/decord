// Module ID: 16689
// Function ID: 16690
// Name: useSearchLayoutInsetTop
// Dependencies: [1613, 2]
// Exports: default

// Module 16689 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
