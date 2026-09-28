// Module ID: 8832
// Function ID: 8833
// Name: useSelectedParticipant
// Dependencies: [4852, 504, 2]
// Exports: default

// Module 8832 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default function useSelectedParticipant(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore];
  return require("initialize").useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
};
