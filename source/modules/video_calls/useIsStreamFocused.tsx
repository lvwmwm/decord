// Module ID: 9583
// Function ID: 9584
// Name: useIsStreamFocused
// Dependencies: [4497, 4502, 586, 2]
// Exports: useIsStreamFocused

// Module 9583 (useIsStreamFocused)
import closure_2 from "getParticipants" /* 4497 */;
import { isStreamParticipant } from "ParticipantTypes" /* 4502 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  const _require = id;
  const items = [closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => {
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
