// Module ID: 19223
// Function ID: 19224
// Name: useSearchLayoutInsetTop
// Dependencies: [1629, 2]
// Exports: default

// Module 19223 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
