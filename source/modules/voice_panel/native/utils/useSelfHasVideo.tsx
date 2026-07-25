// Module ID: 15825
// Function ID: 122181
// Name: useSelfHasVideo
// Dependencies: [4144, 1194, 4178, 566, 9981, 2]
// Exports: default

// Module 15825 (useSelfHasVideo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3, closure_4];
  return _require(566).useStateFromStores(items, () => {
    let tmp;
    const participant = outer1_2.getParticipant(callback, outer1_3.getId());
    if (null != participant) {
      tmp = participant;
    }
    return callback(outer1_1[4]).canRenderParticipantVideo(tmp, outer1_4);
  });
};
