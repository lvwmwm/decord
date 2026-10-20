// Module ID: 18168
// Function ID: 18169
// Name: useExternalPipParticipant
// Dependencies: [19, 6720, 14851, 6590, 502, 2014, 5676, 5593, 10693, 558, 576, 504, 18169, 10698, 2]

// Module 18168 (useExternalPipParticipant)
import CallConstants from "CallConstants" /* 5593 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10693 */;
import participantHasVideo from "participantHasVideo" /* 10698 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 18169 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6720 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 14851 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6590 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5676 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ParticipantTypes = CallConstants.ParticipantTypes;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSetHasActiveVideoOutputSink(selectedParticipantStreamId) {
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
    const items = [selectedParticipantStreamId];
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
  const items = [selectedParticipantStreamId];
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipParticipant() {
  let channelId;
  let first;
  let stateFromStores;
  let stateFromStores1;
  let tmp10;
  let tmp7;
  let tmp9;
  const tmp = stateFromStores;
  let tmp2 = stateFromStores1;
  let obj = stateFromStores(stateFromStores1[10]);
  const cResult = obj.c(20);
  let obj2 = stateFromStores(stateFromStores1[11]);
  const items = [RTCConnectionStore];
  stateFromStores = obj2.useStateFromStores(items, () => channelId.getChannelId());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelRTCStore];
    cResult[0] = items1;
    first = items1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stateFromStores) {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
    cResult[1] = stateFromStores;
    cResult[2] = I;
    tmp7 = I;
  } else {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
  }
  const tmpResult = tmp(tmp2[11]);
  stateFromStores1 = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
    const items2 = [PIPSpeakerStore];
    cResult[3] = items2;
    tmp9 = items2;
  } else {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
  }
  const tmpResult2 = tmp(tmp2[11]);
  const stateFromStores2 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
    const items3 = [ChannelRTCStore, , , ];
    items3[1] = ApplicationStreamingStore;
    let tmp15 = AuthenticationStore;
    items3[2] = AuthenticationStore;
    const tmp16 = MediaEngineStore;
    items3[3] = MediaEngineStore;
    cResult[6] = items3;
  } else {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
  }
  if (cResult[7] === stateFromStores) {
    class I {
      constructor() {
        let tmp2;
        if (null != stateFromStores) {
          const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
          tmp2 = selectedParticipantId;
        }
        return tmp2;
      }
    }
  }
  class T {
    constructor() {
      let obj2;
      let pIPParticipantToShow;
      let tmp15;
      if (null != stateFromStores) {
        const obj = { channelId: stateFromStores, panelMode: VoicePanelModes.PIP, focusedParticipantId: stateFromStores1, lastParticipantId: stateFromStores1, speakingUserId: stateFromStores2, blockList: obj2.createPIPBlockList(VoicePanelModes.PIP, stateFromStores1), showSecondaryPIP: false, canShowActivities: false };
        const computePIPParticipantToShow = VoicePanelPIPUtils.computePIPParticipantToShow;
        VoicePanelPIPUtils;
        obj2 = VoicePanelPIPUtils;
        pIPParticipantToShow = computePIPParticipantToShow(obj);
      }
      let participant;
      if (null != stateFromStores) {
        if (null != pIPParticipantToShow) {
          participant = ChannelRTCStore.getParticipant(tmp, pIPParticipantToShow.id);
        }
      }
      if (null != participant) {
        let obj3;
        if (participant.type !== ParticipantTypes.ACTIVITY) {
          obj3 = { participantType: participant.type, selectedParticipantSpeaking: participant.type === tmp16.USER && participant.speaking, selectedParticipantStreamId: tmp15, selectedParticipantUserId: participant.user.id };
          tmp15 = undefined;
          const obj4 = participantHasVideo;
          if (obj4.canRenderParticipantVideo(participant)) {
            const streamId = participant.streamId;
            tmp15 = streamId;
          }
        }
        return obj3;
      }
      obj3 = { participantType: "test", selectedParticipantSpeaking: "duration", selectedParticipantStreamId: "toCharArray$esjava$1", selectedParticipantUserId: null };
    }
  }
  const items4 = [stateFromStores, stateFromStores1, stateFromStores2];
  cResult[7] = stateFromStores;
  cResult[8] = stateFromStores1;
  cResult[9] = stateFromStores2;
  cResult[10] = T;
  cResult[11] = items4;
}) : (function useExternalPipParticipant() {
  let channelId;
  let participantType;
  let selectedParticipantSpeaking;
  let selectedParticipantUserId;
  let stateFromStores1;
  const tmp = channelId;
  let tmp2 = stateFromStores1;
  let obj = channelId(stateFromStores1[11]);
  const items = [RTCConnectionStore];
  channelId = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [ChannelRTCStore];
  const tmpResult = tmp(tmp2[11]);
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let tmp2;
    if (null != channelId) {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
      tmp2 = selectedParticipantId;
    }
    return tmp2;
  });
  const items2 = [PIPSpeakerStore];
  const tmpResult3 = tmp(tmp2[11]);
  const stateFromStores2 = tmpResult3.useStateFromStores(items2, () => PIPSpeakerStore.getSpeakerId(channelId));
  const items3 = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
  const items4 = [channelId, stateFromStores1, stateFromStores2];
  const tmpResult4 = tmp(tmp2[11]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(items3, () => {
    let obj2;
    let pIPParticipantToShow;
    let tmp15;
    if (null != channelId) {
      const obj = { channelId, panelMode: VoicePanelModes.PIP, focusedParticipantId: stateFromStores1, lastParticipantId: stateFromStores1, speakingUserId: stateFromStores2, blockList: obj2.createPIPBlockList(VoicePanelModes.PIP, stateFromStores1), showSecondaryPIP: false, canShowActivities: false };
      const computePIPParticipantToShow = VoicePanelPIPUtils.computePIPParticipantToShow;
      VoicePanelPIPUtils;
      obj2 = VoicePanelPIPUtils;
      pIPParticipantToShow = computePIPParticipantToShow(obj);
    }
    let participant;
    if (null != channelId) {
      if (null != pIPParticipantToShow) {
        participant = ChannelRTCStore.getParticipant(tmp, pIPParticipantToShow.id);
      }
    }
    if (null != participant) {
      let obj3;
      if (participant.type !== ParticipantTypes.ACTIVITY) {
        obj3 = { participantType: participant.type, selectedParticipantSpeaking: participant.type === tmp16.USER && participant.speaking, selectedParticipantStreamId: tmp15, selectedParticipantUserId: participant.user.id };
        tmp15 = undefined;
        const obj4 = participantHasVideo;
        if (obj4.canRenderParticipantVideo(participant)) {
          const streamId = participant.streamId;
          tmp15 = streamId;
        }
      }
      return obj3;
    }
    obj3 = { participantType: "test", selectedParticipantSpeaking: "duration", selectedParticipantStreamId: "toCharArray$esjava$1", selectedParticipantUserId: null };
  }, items4);
  const selectedParticipantStreamId = stateFromStoresObject.selectedParticipantStreamId;
  ({ participantType, selectedParticipantSpeaking, selectedParticipantUserId } = stateFromStoresObject);
  closure_11({ selectedParticipantStreamId });
  return { channelId, participantType, selectedParticipantSpeaking, selectedParticipantStreamId, selectedParticipantUserId };
});
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default tmp2;
