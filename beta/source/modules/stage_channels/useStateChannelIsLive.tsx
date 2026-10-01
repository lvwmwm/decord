// Module ID: 7844
// Function ID: 7845
// Name: useStateChannelIsLive
// Dependencies: [2050, 504, 2]
// Exports: default

// Module 7844 (useStateChannelIsLive)
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  let closure_0;
  _require = arg0;
  const items = [StageInstanceStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => StageInstanceStore.isLive(closure_0), items1);
};
