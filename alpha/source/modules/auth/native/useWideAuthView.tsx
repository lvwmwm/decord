// Module ID: 7189
// Function ID: 7190
// Name: useWideAuthView
// Dependencies: [7190, 1609, 2]
// Exports: default

// Module 7189 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};
