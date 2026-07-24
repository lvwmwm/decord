// Module ID: 7560
// Function ID: 60293
// Name: useStageChannelIsLive
// Dependencies: [1353, 566, 2]
// Exports: default

// Module 7560 (useStageChannelIsLive)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => outer1_2.isLive(closure_0), items1);
};
