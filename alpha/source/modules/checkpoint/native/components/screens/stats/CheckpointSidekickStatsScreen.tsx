// Module ID: 15949
// Function ID: 15950
// Name: CheckpointSidekickStatsScreen
// Dependencies: [21, 558, 576, 15943, 2]

// Module 15949 (CheckpointSidekickStatsScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15943 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointSidekickStatsScreen() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Sidekick" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function CheckpointSidekickStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Sidekick" });
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSidekickStatsScreen.tsx");

export default tmp2;
