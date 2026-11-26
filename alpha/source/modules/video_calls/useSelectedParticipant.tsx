// Module ID: 10011
// Function ID: 10012
// Name: useSelectedParticipant
// Dependencies: [6933, 504, 2]
// Exports: default

// Module 10011 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
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
