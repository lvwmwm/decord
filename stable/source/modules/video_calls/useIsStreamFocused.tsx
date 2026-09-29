// Module ID: 9774
// Function ID: 9775
// Name: useIsStreamFocused
// Dependencies: [4804, 4809, 504, 2]
// Exports: useIsStreamFocused

// Module 9774 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 4804 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(4809).isStreamParticipant;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  _require = id;
  const items = [ChannelRTCStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != closure_0) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};
