// Module ID: 6624
// Function ID: 6625
// Name: useWideAuthView
// Dependencies: [558, 6625, 1628, 2]

// Module 6624 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6625 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
}) : (function useWideAuthView() {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
});
const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default tmp2;
