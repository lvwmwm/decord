// Module ID: 16681
// Function ID: 16682
// Name: useSearchLayoutInsetTop
// Dependencies: [1627, 2]
// Exports: default

// Module 16681 (useSearchLayoutInsetTop)
import set from "set" /* 2 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;

const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchLayoutInsetTop.tsx");

export default function useSearchLayoutInsetTop() {
  return useSafeAreaInsetsDefault().top + 8;
};
