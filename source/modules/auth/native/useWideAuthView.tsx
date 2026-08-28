// Module ID: 7664
// Function ID: 7665
// Name: useWideAuthView
// Dependencies: [7665, 1625, 2]
// Exports: default

// Module 7664 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7665 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
