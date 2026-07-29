// Module ID: 10394
// Function ID: 10395
// Name: useCanCurrentUserSpeakInChannel
// Dependencies: [1218, 589, 4374, 2]
// Exports: default

// Module 10394 (useCanCurrentUserSpeakInChannel)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("useAudienceRequestToSpeakState").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [fetchFingerprint];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => id.getId());
  const obj = require(589) /* initialize */;
  return importDefault(4374)(stateFromStores, arg0) === require(4374) /* useAudienceRequestToSpeakState */.RequestToSpeakStates.ON_STAGE;
};
