// Module ID: 8831
// Function ID: 8832
// Name: useIsPrivateAudioOnlyCall
// Dependencies: [32, 2044, 4852, 4858, 1993, 4855, 4857, 504, 2]
// Exports: default

// Module 8831 (useIsPrivateAudioOnlyCall)
import CallConstants from "CallConstants" /* 4857 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function areParticipantStatesEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
}
const isActivityParticipant = CallConstants.isActivityParticipant;
const result = size.fileFinishedImporting("modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx");

export default function useIsPrivateAudioOnlyCall(id) {
  let _private;
  let closure_1;
  _require = id;
  const tmp = _require;
  let items = [ChannelRTCStore];
  const items1 = [id];
  const obj = require("get initialized");
  const first = _slicedToArray(obj.useStateFromStores(items, () => {
    const items = [ChannelRTCStore.getSelectedParticipant(_private.id), ChannelRTCStore.getParticipantsVersion(_private.id)];
    return items;
  }, items1, areParticipantStatesEqual), 1)[0];
  let tmp4 = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(id.id).length > 0;
  if (!tmp4) {
    tmp4 = isActivityParticipant(first);
  }
  dependencyMap = tmp4;
  const items2 = [VoiceStateStore, MediaEngineStore, ApplicationStreamingStore];
  const items3 = [id, tmp4];
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(items2, () => {
    const isPrivateResult = _private.isPrivate() && !VoiceStateStore.hasVideo(tmp.id) && !closure_1 && 0 === ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp.id).length && 0 === ApplicationStreamingStore.getAllActiveStreamsForChannel(tmp.id).length && !MediaEngineStore.isVideoEnabled();
    return isPrivateResult;
  }, items3);
};
