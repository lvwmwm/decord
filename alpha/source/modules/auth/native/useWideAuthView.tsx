// Module ID: 6903
// Function ID: 6904
// Name: useWideAuthView
// Dependencies: [558, 6904, 1630, 2]

// Module 6903 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6904 */;
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
