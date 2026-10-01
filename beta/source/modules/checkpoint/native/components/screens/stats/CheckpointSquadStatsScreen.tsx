// Module ID: 15271
// Function ID: 15272
// Name: CheckpointSquadStatsScreen
// Dependencies: [21, 15265, 2]
// Exports: default

// Module 15271 (CheckpointSquadStatsScreen)
import Fragment from "Fragment" /* 21 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15265 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointSquadStatsScreen.tsx");

export default function CheckpointSquadStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Squad" });
};
