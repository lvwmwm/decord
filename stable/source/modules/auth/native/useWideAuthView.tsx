// Module ID: 7111
// Function ID: 7112
// Name: useWideAuthView
// Dependencies: [7112, 1622, 2]
// Exports: default

// Module 7111 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
