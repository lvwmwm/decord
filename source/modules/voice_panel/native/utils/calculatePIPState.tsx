// Module ID: 15640
// Function ID: 119438
// Name: calculatePIPState
// Dependencies: []
// Exports: default

// Module 15640 (calculatePIPState)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const VoicePanelModes = arg1(dependencyMap[2]).VoicePanelModes;
const ParticipantTypes = arg1(dependencyMap[3]).ParticipantTypes;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_panel/native/utils/calculatePIPState.tsx");

export default function calculatePIPState(channelId, getTargetDimensions, lastParticipantId, speakingUserId, focusedId) {
  let tmp = null != focusedId.focusedId;
  if (tmp) {
    const participant = participant.getParticipant(channelId, focusedId.focusedId);
    let type;
    if (null != participant) {
      type = participant.type;
    }
    tmp = type === ParticipantTypes.ACTIVITY;
  }
  const set = new Set();
  const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    set.add(getTargetDimensions(dependencyMap[4]).encodeStreamKey(currentUserActiveStream));
    const obj2 = getTargetDimensions(dependencyMap[4]);
  }
  let tmp10 = focusedId.mode === VoicePanelModes.PANEL;
  if (tmp11) {
    set.add(focusedId.focusedId);
  }
  let obj = { channelId, lastParticipantId, speakingUserId, focusedParticipantId: focusedId.focusedId, blockList: set, panelMode: focusedId.mode, showSecondaryPIP: focusedId.showSecondaryPIP };
  const pIPParticipantToShow = getTargetDimensions(dependencyMap[5]).computePIPParticipantToShow(obj);
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
  const obj3 = getTargetDimensions(dependencyMap[5]);
  const tmp11 = null != focusedId.focusedId && tmp10;
  let id1;
  if (null != pIPParticipantToShow) {
    id1 = pIPParticipantToShow.id;
  }
  let SquarePIPReferenceDimensions = getTargetDimensions.getTargetDimensions(id1);
  if (null == SquarePIPReferenceDimensions) {
    SquarePIPReferenceDimensions = getTargetDimensions(dependencyMap[5]).SquarePIPReferenceDimensions;
  }
  if (tmp10) {
    tmp10 = tmp;
  }
  obj = { participant: pIPParticipantToShow, dimensions: getTargetDimensions(dependencyMap[5]).computePIPSize(SquarePIPReferenceDimensions, tmp15, tmp10, focusedId.showSecondaryPIP) };
  return obj;
};
