// Module ID: 7016
// Function ID: 7017
// Name: useWideAuthView
// Dependencies: [558, 7017, 1630, 2]

// Module 7016 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7017 */;
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
