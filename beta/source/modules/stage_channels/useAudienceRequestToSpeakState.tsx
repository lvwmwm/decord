// Module ID: 4983
// Function ID: 4984
// Name: useAudienceRequestToSpeakState
// Dependencies: [4855, 504, 2]
// Exports: default, getAudienceRequestToSpeakState

// Module 4983 (useAudienceRequestToSpeakState)
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const RequestToSpeakStates = { NONE: 0, [0]: "NONE", REQUESTED_TO_SPEAK: 1, [1]: "REQUESTED_TO_SPEAK", REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK: 2, [2]: "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK", ON_STAGE: 3, [3]: "ON_STAGE" };
const result = size.fileFinishedImporting("modules/stage_channels/useAudienceRequestToSpeakState.tsx");

export default function useAudienceRequestToSpeakState(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("get initialized");
  const items = [VoiceStateStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      let NONE;
      if (null != closure_1) {
        const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(tmp7, tmp);
        if (null == voiceStateForChannel) {
          NONE = obj.NONE;
        } else {
          if (voiceStateForChannel.suppress) {
            if (null != voiceStateForChannel.requestToSpeakTimestamp) {
              NONE = obj.REQUESTED_TO_SPEAK;
            }
          }
          if (!voiceStateForChannel.suppress) {
            if (null != voiceStateForChannel.requestToSpeakTimestamp) {
              NONE = obj.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
          }
          if (!voiceStateForChannel.suppress) {
            let NONE2;
            if (null == voiceStateForChannel.requestToSpeakTimestamp) {
              NONE2 = obj.ON_STAGE;
            }
            NONE = NONE2;
          }
          NONE2 = obj.NONE;
        }
      }
      return NONE;
    }
    NONE = obj.NONE;
  }, items1);
};
export { RequestToSpeakStates };
export const getAudienceRequestToSpeakState = function getAudienceRequestToSpeakState(voiceStateForChannel) {
  let REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  if (null == voiceStateForChannel) {
    REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = obj.NONE;
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
      let NONE;
      if (null == voiceStateForChannel.requestToSpeakTimestamp) {
        NONE = obj.ON_STAGE;
      }
      REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = NONE;
    }
    NONE = obj.NONE;
  }
  return REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
