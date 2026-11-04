// Module ID: 7943
// Function ID: 7944
// Name: useStateChannelIsLive
// Dependencies: [4868, 504, 2]
// Exports: default

// Module 7943 (useStateChannelIsLive)
import StageInstanceStore from "StageInstanceStore" /* 4868 */;
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
