// Module ID: 4310
// Function ID: 37780
// Name: getAudienceRequestToSpeakState
// Dependencies: []
// Exports: default

// Module 4310 (getAudienceRequestToSpeakState)
function getAudienceRequestToSpeakState(voiceStateForChannel) {
  if (null == voiceStateForChannel) {
    let REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.NONE;
  } else {
    if (voiceStateForChannel.suppress) {
      if (null != voiceStateForChannel.requestToSpeakTimestamp) {
        REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.REQUESTED_TO_SPEAK;
      }
    }
    if (!voiceStateForChannel.suppress) {
      if (null != voiceStateForChannel.requestToSpeakTimestamp) {
        REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
      }
    }
    if (!voiceStateForChannel.suppress) {
      if (null == voiceStateForChannel.requestToSpeakTimestamp) {
        let NONE = obj.ON_STAGE;
      }
    }
    NONE = obj.NONE;
  }
  return REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
let closure_2 = importDefault(dependencyMap[0]);
const obj = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default function useAudienceRequestToSpeakState(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    if (null != arg0) {
      if (null != arg1) {
        let NONE = callback(voiceStateForChannel.getVoiceStateForChannel(arg1, arg0));
      }
      return NONE;
    }
    NONE = constants.NONE;
  }, items1);
};
export const RequestToSpeakStates = obj;
export { getAudienceRequestToSpeakState };
