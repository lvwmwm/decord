// Module ID: 10396
// Function ID: 80192
// Name: useCanCurrentUserSpeakInChannel
// Dependencies: [1194, 566, 4314, 2]
// Exports: default

// Module 10396 (useCanCurrentUserSpeakInChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getAudienceRequestToSpeakState").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getId());
  const obj = require(566) /* initialize */;
  return importDefault(4314)(stateFromStores, arg0) === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.ON_STAGE;
};
