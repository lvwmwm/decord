// Module ID: 16866
// Function ID: 16867
// Name: useSearchLayoutInsetTop
// Dependencies: [1611, 2]
// Exports: default

// Module 16866 (useSearchLayoutInsetTop)
import set from "set" /* 2 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
