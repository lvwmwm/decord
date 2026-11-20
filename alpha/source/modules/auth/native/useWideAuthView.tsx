// Module ID: 7252
// Function ID: 7253
// Name: useWideAuthView
// Dependencies: [7253, 1625, 2]
// Exports: default

// Module 7252 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
