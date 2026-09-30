// Module ID: 9060
// Function ID: 9061
// Name: useCanSpeakInChannel
// Dependencies: [502, 504, 5013, 2]
// Exports: default

// Module 9060 (useCanSpeakInChannel)
import initialize from "initialize" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5013 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};
