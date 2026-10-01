// Module ID: 6549
// Function ID: 6550
// Name: useWideAuthView
// Dependencies: [6550, 1610, 2]
// Exports: default

// Module 6549 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6550 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};
