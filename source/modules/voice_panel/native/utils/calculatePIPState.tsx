// Module ID: 15768
// Function ID: 121693
// Name: calculatePIPState
// Dependencies: [4143, 4149, 10015, 4148, 4194, 15769, 2]
// Exports: default

// Module 15768 (calculatePIPState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { VoicePanelModes } from "VoicePanelModes";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
const result = require("VoicePanelModes").fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(channelId, getTargetDimensions, lastParticipantId, speakingUserId, focusedId) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    participant = participant.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (null != participant) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  const set = new Set();
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    set.add(require(4194) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
    const obj2 = require(4194) /* isStreamKey */;
  }
  let tmp10 = focusedId.mode === VoicePanelModes.PANEL;
  if (tmp11) {
    set.add(focusedId.focusedId);
  }
  let obj = { channelId, lastParticipantId, speakingUserId, focusedParticipantId: focusedId.focusedId, blockList: set, panelMode: focusedId.mode, showSecondaryPIP: focusedId.showSecondaryPIP };
  const pIPParticipantToShow = require(15769) /* _createForOfIteratorHelperLoose */.computePIPParticipantToShow(obj);
  let type1;
  if (null != pIPParticipantToShow) {
    type1 = pIPParticipantToShow.type;
  }
  let tmp15 = type1 !== ParticipantTypes.STREAM;
  if (tmp15) {
    let type2;
    if (null != pIPParticipantToShow) {
      type2 = pIPParticipantToShow.type;
    }
    tmp15 = type2 !== ParticipantTypes.ACTIVITY;
  }
  if (tmp15) {
    let tmp18 = null == focusedId.focusedId;
    if (!tmp18) {
      let id;
      if (null != pIPParticipantToShow) {
        id = pIPParticipantToShow.id;
      }
      tmp18 = id !== focusedId.focusedId;
    }
    tmp15 = tmp18;
  }
  const obj3 = require(15769) /* _createForOfIteratorHelperLoose */;
  tmp11 = null != focusedId.focusedId && tmp10;
  let id1;
  if (null != pIPParticipantToShow) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions.getTargetDimensions(id1);
  if (null == SquarePIPReferenceDimensions) {
    SquarePIPReferenceDimensions = require(15769) /* _createForOfIteratorHelperLoose */.SquarePIPReferenceDimensions;
  }
  if (tmp10) {
    tmp10 = tmp;
  }
  obj = { participant: pIPParticipantToShow, dimensions: require(15769) /* _createForOfIteratorHelperLoose */.computePIPSize(SquarePIPReferenceDimensions, tmp15, tmp10, focusedId.showSecondaryPIP) };
  return obj;
};
