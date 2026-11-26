// Module ID: 19207
// Function ID: 19208
// Name: useSearchLayoutInsetTop
// Dependencies: [1629, 2]
// Exports: default

// Module 19207 (useSearchLayoutInsetTop)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
