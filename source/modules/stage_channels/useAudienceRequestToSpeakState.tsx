// Module ID: 4314
// Function ID: 37813
// Name: getAudienceRequestToSpeakState
// Dependencies: [4146, 566, 2]
// Exports: default

// Module 4314 (getAudienceRequestToSpeakState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
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
const obj = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default function useAudienceRequestToSpeakState(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        let NONE = outer1_4(outer1_2.getVoiceStateForChannel(closure_1, closure_0));
      }
      return NONE;
    }
    NONE = outer1_3.NONE;
  }, items1);
};
export const RequestToSpeakStates = obj;
export { getAudienceRequestToSpeakState };
