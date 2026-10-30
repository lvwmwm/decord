// Module ID: 11805
// Function ID: 11806
// Name: useIsStreamFocused
// Dependencies: [6837, 5676, 504, 2]
// Exports: useIsStreamFocused

// Module 11805 (useIsStreamFocused)
import CallConstants from "CallConstants" /* 5676 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
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
