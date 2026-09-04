// Module ID: 9399
// Function ID: 9400
// Name: useSelectedParticipant
// Dependencies: [4497, 586, 2]
// Exports: default

// Module 9399 (useSelectedParticipant)
import closure_2 from "getParticipants" /* 4497 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(586).useStateFromStores(items, () => closure_1_2.getSelectedParticipant(id.id));
};
