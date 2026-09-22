// Module ID: 16981
// Function ID: 16982
// Name: useSearchLayoutInsetTop
// Dependencies: [1611, 2]
// Exports: default

// Module 16981 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
