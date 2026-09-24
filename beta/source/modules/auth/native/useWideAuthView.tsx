// Module ID: 7217
// Function ID: 7218
// Name: useWideAuthView
// Dependencies: [558, 7218, 1613, 2]

// Module 7217 (useWideAuthView)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7218 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/native/useWideAuthView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
}) : (() => {
  const tmp = useIsWindowLargeDefault();
  return MetaQuestUtils.isMetaQuest() || tmp;
});
