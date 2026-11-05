// Module ID: 7260
// Function ID: 7261
// Name: useWideAuthView
// Dependencies: [7261, 1624, 2]
// Exports: default

// Module 7260 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7261 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
