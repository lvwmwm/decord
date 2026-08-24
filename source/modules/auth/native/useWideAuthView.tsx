// Module ID: 8621
// Function ID: 8622
// Name: useWideAuthView
// Dependencies: [7964, 1625, 2]
// Exports: default

// Module 8621 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7964 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
