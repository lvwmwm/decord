// Module ID: 8711
// Function ID: 8712
// Name: useSelectedParticipant
// Dependencies: [4778, 589, 2]
// Exports: default

// Module 8711 (useSelectedParticipant)
import closure_2 from "getParticipants" /* 4778 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_2.getSelectedParticipant(id.id));
};
