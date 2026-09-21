// Module ID: 7187
// Function ID: 7188
// Name: useWideAuthView
// Dependencies: [7188, 1609, 2]
// Exports: default

// Module 7187 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7188 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};
