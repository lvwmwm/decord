// Module ID: 7253
// Function ID: 7254
// Name: useWideAuthView
// Dependencies: [7254, 1627, 2]
// Exports: default

// Module 7253 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7254 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
