// Module ID: 16446
// Function ID: 16447
// Name: useSearchLayoutInsetTop
// Dependencies: [1628, 2]
// Exports: default

// Module 16446 (useSearchLayoutInsetTop)
import set from "set" /* 2 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
