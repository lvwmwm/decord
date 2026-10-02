// Module ID: 15261
// Function ID: 15262
// Name: CheckpointSummaryStatsScreen
// Dependencies: [21, 558, 576, 15253, 2]

// Module 15261 (CheckpointSummaryStatsScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15253 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Summary" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(CheckpointStatsScreenDefault, { name: "Summary" }));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default tmp2;
