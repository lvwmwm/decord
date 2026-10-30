// Module ID: 7105
// Function ID: 7106
// Name: useWideAuthView
// Dependencies: [7106, 1623, 2]
// Exports: default

// Module 7105 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7106 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
