// Module ID: 7726
// Function ID: 7727
// Name: useWideAuthView
// Dependencies: [7727, 1623, 2]
// Exports: default

// Module 7726 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7727 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
