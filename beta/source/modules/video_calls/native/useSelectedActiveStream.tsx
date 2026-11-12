// Module ID: 15517
// Function ID: 15518
// Name: useSelectedActiveStream
// Dependencies: [6931, 6801, 504, 2]
// Exports: default

// Module 15517 (useSelectedActiveStream)
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  let id;
  _require = arg0;
  const items = [ChannelRTCStore, ApplicationStreamingStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
