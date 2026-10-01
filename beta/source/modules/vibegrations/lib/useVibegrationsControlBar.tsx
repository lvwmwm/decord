// Module ID: 16289
// Function ID: 16290
// Name: useVibegrationsControlBar
// Dependencies: [32, 19, 12643, 12642, 504, 2]
// Exports: useVibegrationsControlPhase, useVibegrationsControlStop

// Module 16289 (useVibegrationsControlBar)
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12643 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
const interruptTurn = VibegrationsConnectionStore.interruptTurn;
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsControlBar.tsx");

export const VIBEGRATIONS_CONTROL_HANDOFF_MS = 2400;
export const VIBEGRATIONS_CONTROL_STOP_RETRY_MS = 5000;
export const useVibegrationsControlPhase = function useVibegrationsControlPhase(active) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = _slicedToArray(react.useState(active), 2);
  const tmp = _slicedToArray(react.useState(active), 2);
  const tmp4 = _slicedToArray(react.useState(false), 2);
  const first = tmp4[0];
  let closure_1 = tmp6;
  const obj = react;
  if (active !== tmp2) {
    tmp3(active);
    tmp4[1](!active);
  }
  const items = [first];
  const effect = obj.useEffect(() => {
    let closure_0;
    let timeout;
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1(false), 2400);
      return () => clearTimeout(closure_0);
    }
  }, items);
  let str = "controlling";
  if (!active) {
    let str2 = "idle";
    if (first) {
      str2 = "handoff";
    }
    str = str2;
  }
  return str;
};
export const useVibegrationsControlStop = function useVibegrationsControlStop(projectId) {
  let closure_2;
  let stopping;
  let tmp4;
  _require = projectId;
  const items = [VibegrationsChatStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const isThinkingResult = null != projectId && VibegrationsChatStore.isThinking(tmp);
    return isThinkingResult;
  });
  [stopping, tmp4] = react.useState(false);
  _slicedToArray = tmp4;
  const tmp5 = _slicedToArray(react.useState(stateFromStores), 2);
  if (stateFromStores !== tmp5[0]) {
    tmp5[1](stateFromStores);
    if (!stateFromStores) {
      tmp4(false);
    }
  }
  const items1 = [stopping];
  const effect = obj2.useEffect(() => {
    let closure_0;
    if (stopping) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(false), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [projectId];
  let stop = null;
  if (stateFromStores) {
    stop = obj2.useCallback(() => {
      if (null != projectId) {
        closure_2(true);
        interruptTurn(tmp);
      }
    }, items2);
  }
  return { stop, stopping };
};
