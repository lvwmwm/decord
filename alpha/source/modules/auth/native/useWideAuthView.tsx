// Module ID: 6439
// Function ID: 6440
// Name: useWideAuthView
// Dependencies: [558, 6440, 1615, 2]

// Module 6439 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
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
