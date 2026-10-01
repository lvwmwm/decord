// Module ID: 15270
// Function ID: 15271
// Name: CheckpointGameTimeStatsScreen
// Dependencies: [21, 15265, 2]
// Exports: default

// Module 15270 (CheckpointGameTimeStatsScreen)
import Fragment from "Fragment" /* 21 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15265 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGameTimeStatsScreen.tsx");

export default function CheckpointGameTimeStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Game Time" });
};
