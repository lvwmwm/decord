// Module ID: 12784
// Function ID: 99508
// Name: useSelectedActiveStream
// Dependencies: [4144, 4150, 566, 2]
// Exports: default

// Module 12784 (useSelectedActiveStream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/video_calls/native/useSelectedActiveStream.tsx");

export default function useSelectedActiveStream(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3];
  return _require(566).useStateFromStores(items, () => {
    const selectedParticipantId = outer1_2.getSelectedParticipantId(id.id);
    let activeStreamForStreamKey = null;
    if (null != selectedParticipantId) {
      activeStreamForStreamKey = outer1_3.getActiveStreamForStreamKey(selectedParticipantId);
    }
    return activeStreamForStreamKey;
  });
};
