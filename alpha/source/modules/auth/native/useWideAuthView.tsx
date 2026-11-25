// Module ID: 7277
// Function ID: 7278
// Name: useWideAuthView
// Dependencies: [7278, 1625, 2]
// Exports: default

// Module 7277 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7278 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
