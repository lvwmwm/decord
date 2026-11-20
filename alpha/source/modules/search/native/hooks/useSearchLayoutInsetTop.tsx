// Module ID: 18862
// Function ID: 18863
// Name: useSearchLayoutInsetTop
// Dependencies: [1628, 2]
// Exports: default

// Module 18862 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
