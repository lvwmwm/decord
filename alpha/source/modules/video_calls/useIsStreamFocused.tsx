// Module ID: 9134
// Function ID: 9135
// Name: useIsStreamFocused
// Dependencies: [4882, 4887, 504, 2]
// Exports: useIsStreamFocused

// Module 9134 (useIsStreamFocused)
import ChannelRTCStore from "ChannelRTCStore" /* 4882 */;

const require = globalThis.__r;

const require = fn;
const isStreamParticipant = fn(4887).isStreamParticipant;
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
