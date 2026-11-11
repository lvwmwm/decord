// Module ID: 10943
// Function ID: 10944
// Name: useSelectedParticipant
// Dependencies: [6953, 504, 2]
// Exports: default

// Module 10943 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6953 */;
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
