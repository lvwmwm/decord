// Module ID: 16008
// Function ID: 16009
// Name: CheckpointGamesStatsScreen
// Dependencies: [21, 558, 576, 16005, 2]

// Module 16008 (CheckpointGamesStatsScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 16005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGamesStatsScreen() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Games" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function CheckpointGamesStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Games" });
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default tmp2;
