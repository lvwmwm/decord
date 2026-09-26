// Module ID: 14091
// Function ID: 14092
// Name: useSelectedActiveStream
// Dependencies: [4804, 4810, 504, 2]
// Exports: default

// Module 14091 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 4804 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4810 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, ApplicationStreamingStore];
  return require("initialize").useStateFromStores(items, () => {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
