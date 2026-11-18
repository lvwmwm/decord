// Module ID: 10599
// Function ID: 10600
// Name: useSelectedParticipant
// Dependencies: [6528, 504, 2]
// Exports: default

// Module 10599 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6528 */;
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
