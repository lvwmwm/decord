// Module ID: 19360
// Function ID: 19361
// Name: useSearchLayoutInsetTop
// Dependencies: [1627, 2]
// Exports: default

// Module 19360 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
