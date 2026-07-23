// Module ID: 15763
// Function ID: 121629
// Name: isVoicePanelParticipantFocusable
// Dependencies: [1347, 4143, 4149, 4177, 4148, 10020, 1327, 566, 2]
// Exports: default

// Module 15763 (isVoicePanelParticipantFocusable)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ParticipantTypes from "ParticipantTypes";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function isVoicePanelParticipantFocusable(guildId, channelId, embeddedActivityParticipantId, arg3, outer1_4) {
  let obj = arg3;
  let tmp = outer1_4;
  let obj2 = arg5;
  let obj3 = arg6;
  if (arg3 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  if (tmp === undefined) {
    tmp = closure_5;
  }
  if (obj2 === undefined) {
    obj2 = _createForOfIteratorHelperLoose;
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
        let tmp4Result = tmp4(10020);
        result = tmp4Result.canRenderParticipantVideo(participant, tmp);
      } else {
        tmp4Result = tmp4(1327);
        tmp4Result.assertNever(participant);
      }
      return result;
    }
  }
}
({ isActivityParticipant: closure_6, isStreamParticipant: closure_7, isUserParticipant: closure_8 } = ParticipantTypes);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/utils/useIsVoicePanelParticipantFocusable.tsx");

export default function useIsVoicePanelParticipantFocusable(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let _createForOfIteratorHelperLoose = arg2;
  const items = [_isNativeReflectConstruct, closure_5, _createForOfIteratorHelperLoose, closure_4];
  return _require(566).useStateFromStores(items, () => outer1_9(closure_0, closure_1, _createForOfIteratorHelperLoose, outer1_3, outer1_5, _createForOfIteratorHelperLoose, outer1_4));
};
export { isVoicePanelParticipantFocusable };
