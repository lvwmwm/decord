// Module ID: 10659
// Function ID: 83091
// Name: useIsInvitedToSpeak
// Dependencies: [1194, 1906, 566, 4314, 2]
// Exports: default

// Module 10659 (useIsInvitedToSpeak)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [closure_4];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getVoiceChannelId());
  const obj = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_3.getId());
  const obj2 = require(566) /* initialize */;
  return importDefault(4314)(stateFromStores1, stateFromStores) === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
