// Module ID: 11142
// Function ID: 11143
// Name: useSelectedParticipant
// Dependencies: [6901, 504, 2]
// Exports: default

// Module 11142 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6901 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  let id;
  _require = arg0;
  const items = [ChannelRTCStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
};
