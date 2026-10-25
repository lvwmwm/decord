// Module ID: 18659
// Function ID: 18660
// Name: calculatePIPState
// Dependencies: [6772, 10898, 5632, 18446, 2]
// Exports: default

// Module 18659 (calculatePIPState)
import CallConstants from "CallConstants" /* 5632 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10898 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 18446 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(channelId, getTargetDimensions, lastParticipantId, speakingUserId, focusedId) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    const participant = ChannelRTCStore.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  const mode = focusedId.mode;
  const PANEL = VoicePanelModes.PANEL;
  const obj = VoicePanelPIPUtils;
  const pIPBlockList = obj.createPIPBlockList(focusedId.mode, focusedId.focusedId);
  const obj2 = VoicePanelPIPUtils;
  const obj3 = { channelId, lastParticipantId, speakingUserId, focusedParticipantId: focusedId.focusedId, blockList: pIPBlockList, panelMode: focusedId.mode, showSecondaryPIP: focusedId.showSecondaryPIP, canShowActivities: true };
  const pIPParticipantToShow = obj2.computePIPParticipantToShow(obj3);
  let type1;
  if (pIPParticipantToShow != null) {
    type1 = pIPParticipantToShow.type;
  }
  let tmp12 = type1 !== ParticipantTypes.STREAM;
  if (tmp12) {
    let type2;
    if (pIPParticipantToShow != null) {
      type2 = pIPParticipantToShow.type;
    }
    tmp12 = type2 !== tmp11.ACTIVITY;
  }
  if (tmp12) {
    let tmp14 = null == focusedId.focusedId;
    if (!tmp14) {
      let id;
      if (pIPParticipantToShow != null) {
        id = pIPParticipantToShow.id;
      }
      tmp14 = id !== focusedId.focusedId;
    }
    tmp12 = tmp14;
  }
  let id1;
  const computePIPSize = VoicePanelPIPUtils.computePIPSize;
  getTargetDimensions = getTargetDimensions.getTargetDimensions;
  VoicePanelPIPUtils;
  if (pIPParticipantToShow != null) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions(id1);
  if (SquarePIPReferenceDimensions == null) {
    SquarePIPReferenceDimensions = tmp6(18446).SquarePIPReferenceDimensions;
  }
  const tmp18 = mode === PANEL && tmp;
  const obj4 = { participant: pIPParticipantToShow, dimensions: computePIPSize(SquarePIPReferenceDimensions, tmp12, tmp18, focusedId.showSecondaryPIP) };
  return obj4;
};
