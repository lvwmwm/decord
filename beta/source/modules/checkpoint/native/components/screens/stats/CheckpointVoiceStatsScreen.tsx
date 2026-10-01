// Module ID: 15264
// Function ID: 15265
// Name: CheckpointVoiceStatsScreen
// Dependencies: [21, 15265, 2]
// Exports: default

// Module 15264 (CheckpointVoiceStatsScreen)
import Fragment from "Fragment" /* 21 */;
import CheckpointStatsScreenDefault from "CheckpointStatsScreen" /* 15265 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointVoiceStatsScreen.tsx");

export default function CheckpointVoiceStatsScreen() {
  return jsx(CheckpointStatsScreenDefault, { name: "Voice" });
};
