// Module ID: 18445
// Function ID: 18446
// Name: useExternalPipParticipant
// Dependencies: [19, 6772, 15052, 6642, 502, 2014, 5714, 5632, 10898, 558, 576, 18446, 10903, 504, 2]

// Module 18445 (useExternalPipParticipant)
import CallConstants from "CallConstants" /* 5632 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10898 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 18446 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15052 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getExternalPipSelectedParticipant(batchedStoreListener, selectedParticipantId1, speakerId) {
  let obj4;
  let tmp3;
  if (null == batchedStoreListener) {
    return closure_10;
  } else {
    const obj2 = { channelId: batchedStoreListener, panelMode: VoicePanelModes.PIP, focusedParticipantId: selectedParticipantId1, lastParticipantId: selectedParticipantId1, speakingUserId: speakerId, blockList: obj4.createPIPBlockList(VoicePanelModes.PIP, selectedParticipantId1), showSecondaryPIP: false, canShowActivities: false };
    const computePIPParticipantToShow = VoicePanelPIPUtils.computePIPParticipantToShow;
    VoicePanelPIPUtils;
    obj4 = VoicePanelPIPUtils;
    const pIPParticipantToShow = computePIPParticipantToShow(obj2);
    let participant;
    const tmp7 = require;
    if (null != pIPParticipantToShow) {
      participant = ChannelRTCStore.getParticipant(batchedStoreListener, pIPParticipantToShow.id);
    }
    if (null != participant) {
      let obj;
      if (participant.type !== ParticipantTypes.ACTIVITY) {
        obj = { participantType: null, selectedParticipantId: null, selectedParticipantSpeaking: participant.type === tmp12.USER && participant.speaking, selectedParticipantStreamId: tmp3, selectedParticipantUserId: participant.user.id };
        ({ type: obj.participantType, id: obj.selectedParticipantId } = participant);
        tmp3 = undefined;
        const tmp7Result = tmp7(10903);
        if (tmp7Result.canRenderParticipantVideo(participant)) {
          const streamId = participant.streamId;
          tmp3 = streamId;
        }
      }
      return obj;
    }
    obj = closure_10;
  }
}
const ParticipantTypes = CallConstants.ParticipantTypes;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
  let tmp2;
  let tmp3;
  const obj = selectedParticipantStreamId(576);
  const cResult = obj.c(3);
  selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
  if (cResult[0] !== selectedParticipantStreamId) {
    const fn = function c() {
      let closure_0 = selectedParticipantStreamId;
      if (null != selectedParticipantStreamId) {
        let mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, "useExternalPipParticipant"));
        return () => {
          mediaEngine = mediaEngine.getMediaEngine();
          mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, "useExternalPipParticipant"));
        };
      }
    };
    items = [selectedParticipantStreamId];
    cResult[0] = selectedParticipantStreamId;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
  selectedParticipantStreamId = selectedParticipantStreamId.selectedParticipantStreamId;
  items = [selectedParticipantStreamId];
  const effect = react.useEffect(() => {
    let closure_0 = selectedParticipantStreamId;
    if (null != selectedParticipantStreamId) {
      const useExternalPipParticipant_str = "useExternalPipParticipant";
      let mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant_str));
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant_str));
      };
    }
  }, items);
});
let closure_10 = { participantType: "Reflect", selectedParticipantId: "data", selectedParticipantSpeaking: null, selectedParticipantStreamId: null, selectedParticipantUserId: null };
let items = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipParticipant() {
  let channelId;
  let first;
  let stateFromStores;
  let stateFromStores1;
  let tmp11;
  let tmp7;
  let tmp9;
  const tmp = stateFromStores;
  let tmp2 = stateFromStores1;
  const obj = stateFromStores(stateFromStores1[10]);
  const cResult = obj.c(14);
  items = [RTCConnectionStore];
  const obj2 = stateFromStores(stateFromStores1[13]);
  stateFromStores = obj2.useStateFromStores(items, () => channelId.getChannelId());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelRTCStore];
    cResult[0] = items1;
    first = items1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stateFromStores) {
    const fn = function o() {
      let tmp2;
      if (null != stateFromStores) {
        const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
        tmp2 = selectedParticipantId;
      }
      return tmp2;
    };
    cResult[1] = stateFromStores;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[13]);
  stateFromStores1 = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PIPSpeakerStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class P {
      constructor() {
        return PIPSpeakerStore.getSpeakerId(stateFromStores);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = P;
    tmp11 = P;
  } else {
    class P {
      constructor() {
        return PIPSpeakerStore.getSpeakerId(stateFromStores);
      }
    }
  }
  const tmpResult2 = tmp(tmp2[13]);
  const stateFromStores2 = tmpResult2.useStateFromStores(tmp9, tmp11);
  if (cResult[6] === stateFromStores) {
    class P {
      constructor() {
        return PIPSpeakerStore.getSpeakerId(stateFromStores);
      }
    }
  }
  class E {
    constructor() {
      return getExternalPipSelectedParticipant(stateFromStores, stateFromStores1, stateFromStores2);
    }
  }
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = stateFromStores2;
  cResult[9] = E;
  cResult[10] = items3;
}) : (function useExternalPipParticipant() {
  let channelId;
  let stateFromStores;
  let stateFromStores1;
  const tmp = stateFromStores;
  let tmp2 = stateFromStores1;
  items = [RTCConnectionStore];
  const obj = stateFromStores(stateFromStores1[13]);
  stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [ChannelRTCStore];
  const tmpResult = tmp(tmp2[13]);
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let tmp2;
    if (null != stateFromStores) {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
      tmp2 = selectedParticipantId;
    }
    return tmp2;
  });
  const items2 = [PIPSpeakerStore];
  const tmpResult3 = tmp(tmp2[13]);
  const stateFromStores2 = tmpResult3.useStateFromStores(items2, () => PIPSpeakerStore.getSpeakerId(stateFromStores));
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const tmpResult4 = tmp(tmp2[13]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(items, () => getExternalPipSelectedParticipant(stateFromStores, stateFromStores1, stateFromStores2), items3);
  closure_9(stateFromStoresObject);
  const obj2 = { channelId: stateFromStores };
  const merged = Object.assign(stateFromStoresObject);
  return obj2;
});
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default tmp6;
export const EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES = items;
export { getExternalPipSelectedParticipant };
