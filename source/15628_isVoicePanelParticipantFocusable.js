// Module ID: 15628
// Function ID: 119350
// Name: isVoicePanelParticipantFocusable
// Dependencies: []
// Exports: default

// Module 15628 (isVoicePanelParticipantFocusable)
function isVoicePanelParticipantFocusable(guildId, channelId, embeddedActivityParticipantId, arg3, closure_4) {
  let obj = arg3;
  let tmp = closure_4;
  let obj2 = arg5;
  let obj3 = arg6;
  if (arg3 === undefined) {
    obj = closure_3;
  }
  if (tmp === undefined) {
    tmp = closure_5;
  }
  if (obj2 === undefined) {
    obj2 = closure_2;
  }
  if (obj3 === undefined) {
    obj3 = closure_4;
  }
  if (null == embeddedActivityParticipantId) {
    return false;
  } else {
    const participant = obj.getParticipant(channelId, embeddedActivityParticipantId);
    if (null == participant) {
      return false;
    } else if (callback(participant)) {
      const currentEmbeddedActivity = obj2.getCurrentEmbeddedActivity();
      let applicationId;
      if (null != currentEmbeddedActivity) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return null != applicationId && participant.applicationId === currentEmbeddedActivity.applicationId;
    } else {
      if (callback2(participant)) {
        let result = null != obj3.getActiveStreamForUser(participant.user.id, guildId);
      } else if (callback3(participant)) {
        let tmp4Result = tmp4(tmp5[5]);
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        tmp4Result = tmp4(tmp5[6]);
        tmp4Result.assertNever(participant);
      }
      return result;
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ isActivityParticipant: closure_6, isStreamParticipant: closure_7, isUserParticipant: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  arg1 = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  const items = [closure_3, closure_5, closure_2, closure_4];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => callback(arg0, arg1, arg2, closure_3, closure_5, arg2, closure_4));
};
export { isVoicePanelParticipantFocusable };
