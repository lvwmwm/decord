// Module ID: 15273
// Function ID: 15274
// Name: CheckpointSummaryStatsScreen
// Dependencies: [21, 15265, 2]
// Exports: default

// Module 15273 (CheckpointSummaryStatsScreen)
import Fragment from "Fragment" /* 21 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15265 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSummaryStatsScreen.tsx");

export default function CheckpointSummaryStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Summary" });
};
