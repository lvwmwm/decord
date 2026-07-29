// Module ID: 15912
// Function ID: 15913
// Name: calculatePIPState
// Dependencies: [4202, 4208, 10038, 4207, 4253, 15913, 2]
// Exports: default

// Module 15912 (calculatePIPState)
import getParticipants from "getParticipants";
import reset from "reset";
import { VoicePanelModes } from "VoicePanelModes";
import { ParticipantTypes } from "ParticipantTypes";

const require = arg1;
const result = require("VoicePanelModes").fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(channelId, getTargetDimensions, lastParticipantId, speakingUserId, focusedId) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    participant = participant.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  const set = new Set();
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    set.add(require(4253) /* isStreamKey */.encodeStreamKey(currentUserActiveStream));
    const obj2 = require(4253) /* isStreamKey */;
  }
  let tmp10 = focusedId.mode === VoicePanelModes.PANEL;
  if (tmp11) {
    set.add(focusedId.focusedId);
  }
  let obj = { channelId, lastParticipantId, speakingUserId, focusedParticipantId: focusedId.focusedId, blockList: set, panelMode: focusedId.mode, showSecondaryPIP: focusedId.showSecondaryPIP };
  const pIPParticipantToShow = require(15913) /* PIPReferenceDimensions */.computePIPParticipantToShow(obj);
  let type1;
  if (pIPParticipantToShow != null) {
    type1 = pIPParticipantToShow.type;
  }
  let tmp18 = type1 !== ParticipantTypes.STREAM;
  if (tmp18) {
    let type2;
    if (pIPParticipantToShow != null) {
      type2 = pIPParticipantToShow.type;
    }
    tmp18 = type2 !== tmp17.ACTIVITY;
  }
  if (tmp18) {
    let tmp20 = null == focusedId.focusedId;
    if (!tmp20) {
      let id;
      if (pIPParticipantToShow != null) {
        id = pIPParticipantToShow.id;
      }
      tmp20 = id !== focusedId.focusedId;
    }
    tmp18 = tmp20;
  }
  const obj3 = require(15913) /* PIPReferenceDimensions */;
  tmp11 = null != focusedId.focusedId && tmp10;
  let id1;
  if (pIPParticipantToShow != null) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions.getTargetDimensions(id1);
  if (SquarePIPReferenceDimensions == null) {
    SquarePIPReferenceDimensions = tmp13(15913).SquarePIPReferenceDimensions;
  }
  if (tmp10) {
    tmp10 = tmp;
  }
  obj = { participant: pIPParticipantToShow, dimensions: require(15913) /* PIPReferenceDimensions */.computePIPSize(SquarePIPReferenceDimensions, tmp18, tmp10, focusedId.showSecondaryPIP) };
  return obj;
};
