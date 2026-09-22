// Module ID: 7045
// Function ID: 7046
// Name: useWideAuthView
// Dependencies: [7046, 1608, 2]
// Exports: default

// Module 7045 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};
