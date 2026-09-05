// Module ID: 9654
// Function ID: 9655
// Name: useIsStreamFocused
// Dependencies: [4576, 4581, 504, 2]
// Exports: useIsStreamFocused

// Module 9654 (useIsStreamFocused)
import closure_2 from "getParticipants" /* 4576 */;
import { isStreamParticipant } from "ParticipantTypes" /* 4581 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  const _require = id;
  const items = [closure_2];
  const stateFromStores = _require(504).useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = closure_1_2.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};
