// Module ID: 13127
// Function ID: 13128
// Name: useSelectedActiveStream
// Dependencies: [4358, 4364, 589, 2]
// Exports: default

// Module 13127 (useSelectedActiveStream)
import getParticipants from "getParticipants";
import reset from "reset";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const _require = arg0;
  const items = [getParticipants, reset];
  return _require(589).useStateFromStores(items, () => {
    const selectedParticipantId = outer1_2.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = outer1_3.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
