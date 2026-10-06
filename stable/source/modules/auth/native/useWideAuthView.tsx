// Module ID: 6360
// Function ID: 6361
// Name: useWideAuthView
// Dependencies: [558, 6361, 1616, 2]

// Module 6360 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1616 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6361 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
}) : (() => {
  const tmp = useIsWindowLargeDefault();
  const obj = MetaQuestUtils;
  const tmp2 = obj.isMetaQuest() || tmp;
  return tmp2;
});
const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default tmp2;
