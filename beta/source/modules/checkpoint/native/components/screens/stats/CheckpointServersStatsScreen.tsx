// Module ID: 15267
// Function ID: 15268
// Name: CheckpointServersStatsScreen
// Dependencies: [21, 15265, 2]
// Exports: default

// Module 15267 (CheckpointServersStatsScreen)
import Fragment from "Fragment" /* 21 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15265 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointServersStatsScreen.tsx");

export default function CheckpointServersStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Servers" });
};
