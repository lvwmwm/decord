// Module ID: 19194
// Function ID: 19195
// Name: useExternalPipSelectedTile
// Dependencies: [19, 6843, 15628, 5764, 19108, 19106, 5874, 504, 2]
// Exports: default

// Module 19194 (useExternalPipSelectedTile)
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19108 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import PIPSpeakerStore from "PIPSpeakerStore" /* 15628 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import size_mod from "module_2" /* 2 */;

let speakerId;

const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipSelectedTile.android.tsx");

export default function useExternalPipSelectedTile(arg0, arg1, arg2) {
  let channelId;
  let selectedParticipantId;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let str = "card";
  if (arg2 === VoicePanelPIPModes.IN_APP) {
    str = "pip";
  }
  let items = [arg0, arg1, str];
  const effect = react.useEffect(() => {
    let batchedStoreListener;
    let surface;
    let targetDimensions;
    function update() {
      let height;
      let selectedParticipantStreamId;
      let width;
      if (channelId.getChannelId() === batchedStoreListener) {
        const selectedParticipantId1 = selectedParticipantId.getSelectedParticipantId(tmp);
        speakerId = speakerId.getSpeakerId(tmp);
        const obj = batchedStoreListener(str[5]);
        const externalPipSelectedParticipant = obj.getExternalPipSelectedParticipant(tmp, selectedParticipantId1, speakerId);
        ({ selectedParticipantId, selectedParticipantStreamId } = externalPipSelectedParticipant);
        if (null != selectedParticipantId) {
          targetDimensions = targetDimensions.getTargetDimensions(selectedParticipantId1);
          ({ width, height } = targetDimensions);
          const obj3 = { id: selectedParticipantId, streamId: selectedParticipantStreamId, pipDimensions: size, surface };
          const setSelectedTile = targetDimensions(str[6]).setSelectedTile;
          targetDimensions(str[6]);
          if (selectedParticipantStreamId == null) {
            selectedParticipantStreamId = null;
          }
          size = { width, height };
          setSelectedTile(obj3);
        } else {
          const obj2 = targetDimensions(str[6]);
          obj2.setSelectedTile(null);
        }
      }
    }
    const items = [channelId, speakerId];
    const BatchedStoreListener = batchedStoreListener(str[7]).BatchedStoreListener;
    HermesBuiltin.arraySpread(items, batchedStoreListener(str[5]).EXTERNAL_PIP_SELECTED_PARTICIPANT_STORES, 2);
    batchedStoreListener = new BatchedStoreListener(items, update);
    batchedStoreListener.attach("useExternalPipSelectedTile");
    targetDimensions = targetDimensions.subscribeFromItem(update);
    update();
    return () => {
      batchedStoreListener.detach();
      targetDimensions();
    };
  }, items);
  const effect1 = react.useEffect(() => () => {
    const obj = closure_1_1(str[6]);
    return obj.setSelectedTile(null);
  }, []);
};
