// Module ID: 18899
// Function ID: 18900
// Name: useSearchLayoutInsetTop
// Dependencies: [1626, 2]
// Exports: default

// Module 18899 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
