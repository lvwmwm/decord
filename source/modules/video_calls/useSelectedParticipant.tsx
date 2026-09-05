// Module ID: 9470
// Function ID: 9471
// Name: useSelectedParticipant
// Dependencies: [4576, 504, 2]
// Exports: default

// Module 9470 (useSelectedParticipant)
import closure_2 from "getParticipants" /* 4576 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(504).useStateFromStores(items, () => closure_1_2.getSelectedParticipant(id.id));
};
