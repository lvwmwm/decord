// Module ID: 13718
// Function ID: 13719
// Name: useSelectedActiveStream
// Dependencies: [4497, 4503, 586, 2]
// Exports: default

// Module 13718 (useSelectedActiveStream)
import closure_2 from "getParticipants" /* 4497 */;
import closure_3 from "reset" /* 4503 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(586).useStateFromStores(items, () => {
    const selectedParticipantId = closure_1_2.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = closure_1_3.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
