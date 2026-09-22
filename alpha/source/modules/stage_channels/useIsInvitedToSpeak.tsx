// Module ID: 9772
// Function ID: 9773
// Name: useIsInvitedToSpeak
// Dependencies: [502, 2096, 504, 4904, 2]
// Exports: default

// Module 9772 (useIsInvitedToSpeak)
import initialize from "initialize" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4904 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [SelectedChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const items1 = [AuthenticationStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
