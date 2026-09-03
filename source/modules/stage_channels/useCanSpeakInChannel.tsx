// Module ID: 9568
// Function ID: 9569
// Name: useCanCurrentUserSpeakInChannel
// Dependencies: [1215, 586, 4668, 2]
// Exports: default

// Module 9568 (useCanCurrentUserSpeakInChannel)
import initialize from "initialize" /* 586 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4668 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4668 */;
import closure_3 from "fetchFingerprint" /* 1215 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const obj = initialize;
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};
