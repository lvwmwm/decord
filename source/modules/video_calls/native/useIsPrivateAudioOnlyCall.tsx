// Module ID: 10242
// Function ID: 79013
// Name: areParticipantStatesEqual
// Dependencies: [57, 1347, 4143, 4149, 4177, 4146, 4148, 566, 2]
// Exports: default

// Module 10242 (areParticipantStatesEqual)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { isActivityParticipant } from "ParticipantTypes";

const require = arg1;
function areParticipantStatesEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default function useIsPrivateAudioOnlyCall(id) {
  const _require = id;
  let items = [_isNativeReflectConstruct];
  const items1 = [id];
  let tmp = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp) {
    tmp = isActivityParticipant(callback(obj.useStateFromStores(items, () => {
      const items = [outer1_4.getSelectedParticipant(_private.id), outer1_4.getParticipantsVersion(_private.id)];
      return items;
    }, items1, areParticipantStatesEqual), 1)[0]);
  }
  const dependencyMap = tmp;
  obj = _require(566);
  const items2 = [closure_7, closure_6, closure_5];
  const items3 = [id, tmp];
  return _require(566).useStateFromStores(items2, () => {
    let isPrivateResult = _private.isPrivate();
    if (isPrivateResult) {
      isPrivateResult = !outer1_7.hasVideo(_private.id);
    }
    if (isPrivateResult) {
      isPrivateResult = !closure_1;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === outer1_5.getAllApplicationStreamsForChannel(_private.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = 0 === outer1_5.getAllActiveStreamsForChannel(_private.id).length;
    }
    if (isPrivateResult) {
      isPrivateResult = !outer1_6.isVideoEnabled();
    }
    return isPrivateResult;
  }, items3);
};
