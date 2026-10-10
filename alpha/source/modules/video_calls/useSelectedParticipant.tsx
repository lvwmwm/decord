// Module ID: 10356
// Function ID: 10357
// Name: useSelectedParticipant
// Dependencies: [6036, 558, 576, 504, 2]

// Module 10356 (useSelectedParticipant)
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedParticipant(id) {
  let first;
  let tmp6;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function l() {
      return ChannelRTCStore.getSelectedParticipant(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useSelectedParticipant(arg0) {
  let id;
  _require = arg0;
  const items = [ChannelRTCStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
});
const result = size.fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default tmp2;
