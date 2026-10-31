// Module ID: 11192
// Function ID: 11193
// Name: useCanSpeakInChannel
// Dependencies: [502, 504, 6048, 2]
// Exports: default

// Module 11192 (useCanSpeakInChannel)
import get_initialized from "get initialized" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6048 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  let id;
  const items = [AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp2 = useAudienceRequestToSpeakStateDefault(stateFromStores, arg0);
  return tmp2 === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};
