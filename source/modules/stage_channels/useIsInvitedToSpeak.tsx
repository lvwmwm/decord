// Module ID: 10659
// Function ID: 10660
// Name: useIsInvitedToSpeak
// Dependencies: [1218, 1931, 589, 4469, 2]
// Exports: default

// Module 10659 (useIsInvitedToSpeak)
import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [handleConnectionOpen];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = require(589) /* initialize */;
  const items1 = [fetchFingerprint];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => id.getId());
  const obj2 = require(589) /* initialize */;
  return importDefault(4469)(stateFromStores1, stateFromStores) === require(4469) /* useAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
