// Module ID: 11006
// Function ID: 11007
// Name: useSelectedParticipant
// Dependencies: [7016, 504, 2]
// Exports: default

// Module 11006 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
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
