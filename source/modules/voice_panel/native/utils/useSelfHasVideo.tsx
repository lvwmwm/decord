// Module ID: 15814
// Function ID: 122012
// Name: useSelfHasVideo
// Dependencies: [4143, 1194, 4177, 566, 10052, 2]
// Exports: default

// Module 15814 (useSelfHasVideo)
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
