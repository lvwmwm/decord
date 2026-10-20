// Module ID: 6626
// Function ID: 6627
// Name: useWideAuthView
// Dependencies: [558, 6627, 1628, 2]

// Module 6626 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6627 */;
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
