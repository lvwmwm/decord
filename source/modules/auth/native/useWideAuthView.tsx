// Module ID: 6884
// Function ID: 6885
// Name: useWideAuthView
// Dependencies: [6885, 1623, 2]
// Exports: default

// Module 6884 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6885 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
