// Module ID: 10577
// Function ID: 10578
// Name: useSelectedParticipant
// Dependencies: [6499, 504, 2]
// Exports: default

// Module 10577 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6499 */;
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
