// Module ID: 7275
// Function ID: 7276
// Name: useWideAuthView
// Dependencies: [7276, 1609, 2]
// Exports: default

// Module 7275 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7276 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
};
