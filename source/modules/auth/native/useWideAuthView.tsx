// Module ID: 6944
// Function ID: 6945
// Name: useWideAuthView
// Dependencies: [6945, 1608, 2]
// Exports: default

// Module 6944 (useWideAuthView)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;

const result = set.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = isMetaQuest;
  return isMetaQuest.isMetaQuest() || tmp;
};
