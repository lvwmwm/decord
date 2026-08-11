// Module ID: 10757
// Function ID: 10758
// Name: useIsStreamFocused
// Dependencies: [4316, 4321, 589, 2]
// Exports: useIsStreamFocused

// Module 10757 (useIsStreamFocused)
import getParticipants from "getParticipants";
import { isStreamParticipant } from "ParticipantTypes";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  const _require = id;
  const items = [getParticipants];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = outer1_2.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};
