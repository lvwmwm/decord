// Module ID: 13321
// Function ID: 13322
// Name: useSelectedActiveStream
// Dependencies: [4845, 4851, 504, 2]
// Exports: default

// Module 13321 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4851 */;

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
