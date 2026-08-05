// Module ID: 7671
// Function ID: 7672
// Name: useStageChannelIsLive
// Dependencies: [1377, 589, 2]
// Exports: default

// Module 7671 (useStageChannelIsLive)
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const _require = arg0;
  const items = [handleStageInstanceCreateOrUpdate];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => outer1_2.isLive(closure_0), items1);
};
