// Module ID: 9607
// Function ID: 9608
// Name: useIsInvitedToSpeak
// Dependencies: [1215, 1980, 586, 4675, 2]
// Exports: default

// Module 9607 (useIsInvitedToSpeak)
import initialize from "initialize" /* 586 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4675 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4675 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "handleConnectionOpen" /* 1980 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = initialize;
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  const obj2 = initialize;
  return useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
