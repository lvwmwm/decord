// Module ID: 11357
// Function ID: 11358
// Name: useIsInvitedToSpeak
// Dependencies: [502, 5073, 504, 6212, 2]
// Exports: default

// Module 11357 (useIsInvitedToSpeak)
import get_initialized from "get initialized" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6212 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import size from "module_2" /* 2 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

const result = size.fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  let id;
  let voiceChannelId;
  const items = [SelectedChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const items1 = [AuthenticationStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => id.getId());
  const tmp3 = useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores);
  return tmp3 === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};
