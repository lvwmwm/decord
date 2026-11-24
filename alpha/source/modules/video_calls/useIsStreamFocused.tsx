// Module ID: 10112
// Function ID: 10113
// Name: useIsStreamFocused
// Dependencies: [6807, 5567, 504, 2]
// Exports: useIsStreamFocused

// Module 10112 (useIsStreamFocused)
import CallConstants from "CallConstants" /* 5567 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
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
