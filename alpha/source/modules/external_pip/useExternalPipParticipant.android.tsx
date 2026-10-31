// Module ID: 19106
// Function ID: 19107
// Name: useExternalPipParticipant
// Dependencies: [19, 6843, 15628, 6714, 502, 2006, 5764, 5681, 11223, 19107, 11228, 504, 2]
// Exports: default

// Module 19106 (useExternalPipParticipant)
import CallConstants from "CallConstants" /* 5681 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19107 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15628 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import size from "module_2" /* 2 */;

let mediaEngine;

function getExternalPipSelectedParticipant(batchedStoreListener, selectedParticipantId1, speakerId) {
  let obj4;
  let tmp3;
  if (null == batchedStoreListener) {
    return closure_9;
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
        const tmp7Result = tmp7(11228);
        if (tmp7Result.canRenderParticipantVideo(participant)) {
          const streamId = participant.streamId;
          tmp3 = streamId;
        }
      }
      return obj;
    }
    obj = closure_9;
  }
}
const ParticipantTypes = CallConstants.ParticipantTypes;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let closure_9 = { participantType: "flexDirection", selectedParticipantId: "createStyles", selectedParticipantSpeaking: null, selectedParticipantStreamId: null, selectedParticipantUserId: null };
let items = [ChannelRTCStore, ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipParticipant.android.tsx");

export default function useExternalPipParticipant() {
  let channelId;
  let stateFromStores;
  let stateFromStores1;
  const tmp = stateFromStores;
  let tmp2 = stateFromStores1;
  items = [RTCConnectionStore];
  const obj = stateFromStores(stateFromStores1[11]);
  stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [ChannelRTCStore];
  const tmpResult = tmp(tmp2[11]);
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let tmp2;
    if (null != stateFromStores) {
      const selectedParticipantId = ChannelRTCStore.getSelectedParticipantId(tmp);
      tmp2 = selectedParticipantId;
    }
    return tmp2;
  });
  const items2 = [PIPSpeakerStore];
  const tmpResult3 = tmp(tmp2[11]);
  const stateFromStores2 = tmpResult3.useStateFromStores(items2, () => PIPSpeakerStore.getSpeakerId(stateFromStores));
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const tmpResult4 = tmp(tmp2[11]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(items, () => getExternalPipSelectedParticipant(stateFromStores, stateFromStores1, stateFromStores2), items3);
  const selectedParticipantStreamId = stateFromStoresObject.selectedParticipantStreamId;
  const items4 = [selectedParticipantStreamId];
  const effect = stateFromStores2.useEffect(() => {
    let closure_0 = selectedParticipantStreamId;
    if (null != selectedParticipantStreamId) {
      const useExternalPipParticipant_str = "useExternalPipParticipant";
      mediaEngine = mediaEngine.getMediaEngine();
      mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_0, true, useExternalPipParticipant_str));
      return () => {
        mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.eachConnection((setHasActiveVideoOutputSink) => setHasActiveVideoOutputSink.setHasActiveVideoOutputSink(closure_1_0, false, useExternalPipParticipant_str));
      };
    }
  }, items4);
  const obj2 = { channelId: stateFromStores };
  const merged = Object.assign(stateFromStoresObject);
  return obj2;
};
export const EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES = items;
export { getExternalPipSelectedParticipant };
