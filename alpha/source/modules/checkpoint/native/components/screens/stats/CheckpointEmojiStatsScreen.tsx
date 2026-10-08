// Module ID: 15832
// Function ID: 15833
// Name: CheckpointEmojiStatsScreen
// Dependencies: [21, 558, 576, 15830, 2]

// Module 15832 (CheckpointEmojiStatsScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15830 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointEmojiStatsScreen() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(CheckpointStatsScreenDefault, { name: "Emoji" });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function CheckpointEmojiStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Emoji" });
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointEmojiStatsScreen.tsx");

export default tmp2;
