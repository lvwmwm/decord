// Module ID: 7308
// Function ID: 7309
// Name: useWideAuthView
// Dependencies: [7309, 1626, 2]
// Exports: default

// Module 7308 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7309 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
