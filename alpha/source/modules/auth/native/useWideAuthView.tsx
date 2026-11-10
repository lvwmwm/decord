// Module ID: 7185
// Function ID: 7186
// Name: useWideAuthView
// Dependencies: [7186, 1624, 2]
// Exports: default

// Module 7185 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7186 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
};
