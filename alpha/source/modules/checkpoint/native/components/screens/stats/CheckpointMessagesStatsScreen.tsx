// Module ID: 15540
// Function ID: 15541
// Name: CheckpointMessagesStatsScreen
// Dependencies: [21, 558, 576, 15539, 2]

// Module 15540 (CheckpointMessagesStatsScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15539 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Messages" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => jsx(CheckpointStatsScreenDefault, { name: "Messages" }));
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointMessagesStatsScreen.tsx");

export default tmp2;
