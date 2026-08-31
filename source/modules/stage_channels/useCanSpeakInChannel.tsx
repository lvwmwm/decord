// Module ID: 9512
// Function ID: 9513
// Name: useCanCurrentUserSpeakInChannel
// Dependencies: [1218, 589, 4636, 2]
// Exports: default

// Module 9512 (useCanCurrentUserSpeakInChannel)
import initialize from "initialize" /* 589 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4636 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4636 */;
import closure_3 from "fetchFingerprint" /* 1218 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const obj = initialize;
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};
