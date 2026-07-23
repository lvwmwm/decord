// Module ID: 10020
// Function ID: 77448
// Name: participantHasVideo
// Dependencies: [1194, 4177, 4148, 566, 2]
// Exports: useCanRenderParticipantVideo

// Module 10020 (participantHasVideo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ParticipantTypes from "ParticipantTypes";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function participantHasVideo(type) {
  let tmp = type;
  if (type.type === constants.ACTIVITY) {
    return tmp2;
  } else if (callback(tmp)) {
    tmp = null;
    let tmp6 = null != tmp.streamId;
  } else {
    const voiceState = tmp.voiceState;
    let selfVideo;
    if (null != voiceState) {
      selfVideo = voiceState.selfVideo;
    }
    tmp6 = null != selfVideo && selfVideo;
  }
}
function canRenderParticipantVideo(value, outer1_4) {
  let obj = outer1_4;
  if (outer1_4 === undefined) {
    obj = closure_3;
  }
  let tmp = null != value;
  if (tmp) {
    const tmp3 = !participantHasVideo(value);
    let tmp4 = !tmp3;
    if (!tmp3) {
      let tmp6 = !callback(value);
      if (!tmp6) {
        tmp6 = value.user.id !== id.getId();
      }
      if (tmp6) {
        tmp6 = !callback2(value) || !obj.isLocalVideoDisabled(value.id);
        const tmp9 = !callback2(value) || !obj.isLocalVideoDisabled(value.id);
      }
      tmp4 = tmp6;
    }
    tmp = tmp4;
  }
  return tmp;
}
({ ParticipantTypes: closure_4, isStreamParticipant: closure_5, isUserParticipant: closure_6 } = ParticipantTypes);
const result = require("ParticipantTypes").fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default participantHasVideo;
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = function useCanRenderParticipantVideo(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_3];
  return _require(566).useStateFromStores(items, () => outer1_8(closure_0, outer1_3));
};
