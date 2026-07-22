// Module ID: 10012
// Function ID: 77408
// Name: participantHasVideo
// Dependencies: []
// Exports: useCanRenderParticipantVideo

// Module 10012 (participantHasVideo)
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
function canRenderParticipantVideo(value, closure_4) {
  let obj = closure_4;
  if (closure_4 === undefined) {
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ ParticipantTypes: closure_4, isStreamParticipant: closure_5, isUserParticipant: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/video_calls/participantHasVideo.tsx");

export default participantHasVideo;
export { canRenderParticipantVideo };
export const useCanRenderParticipantVideo = function useCanRenderParticipantVideo(stateFromStores) {
  const arg1 = stateFromStores;
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, closure_3));
};
