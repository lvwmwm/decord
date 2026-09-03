// Module ID: 7729
// Function ID: 7730
// Name: useWideAuthView
// Dependencies: [7730, 1623, 2]
// Exports: default

// Module 7729 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7730 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
