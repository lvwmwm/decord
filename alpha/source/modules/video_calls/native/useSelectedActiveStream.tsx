// Module ID: 13541
// Function ID: 13542
// Name: useSelectedActiveStream
// Dependencies: [4861, 4867, 504, 2]
// Exports: default

// Module 13541 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 4861 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4867 */;

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
