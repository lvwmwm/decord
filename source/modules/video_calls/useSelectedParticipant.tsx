// Module ID: 10252
// Function ID: 10253
// Name: useSelectedParticipant
// Dependencies: [4206, 589, 2]
// Exports: default

// Module 10252 (useSelectedParticipant)
import getParticipants from "getParticipants";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  const _require = arg0;
  const items = [getParticipants];
  return _require(589).useStateFromStores(items, () => outer1_2.getSelectedParticipant(id.id));
};
