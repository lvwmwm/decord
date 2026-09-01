// Module ID: 7717
// Function ID: 7718
// Name: useWideAuthView
// Dependencies: [7718, 1624, 2]
// Exports: default

// Module 7717 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1624 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7718 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
