// Module ID: 15269
// Function ID: 15270
// Name: CheckpointGamesStatsScreen
// Dependencies: [21, 15265, 2]
// Exports: default

// Module 15269 (CheckpointGamesStatsScreen)
import Fragment from "Fragment" /* 21 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15265 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default function CheckpointGamesStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Games" });
};
