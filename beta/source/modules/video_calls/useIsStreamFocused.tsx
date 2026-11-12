// Module ID: 12039
// Function ID: 12040
// Name: useIsStreamFocused
// Dependencies: [6931, 5837, 504, 2]
// Exports: useIsStreamFocused

// Module 12039 (useIsStreamFocused)
import CallConstants from "CallConstants" /* 5837 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const isStreamParticipant = CallConstants.isStreamParticipant;
const result = size.fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export function useIsStreamFocused(id) {
  _require = id;
  const items = [ChannelRTCStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != id) {
      selectedParticipant = ChannelRTCStore.getSelectedParticipant(tmp);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
}
