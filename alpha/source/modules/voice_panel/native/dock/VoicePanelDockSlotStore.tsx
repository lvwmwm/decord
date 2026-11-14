// Module ID: 14855
// Function ID: 14856
// Name: VoicePanelDockSlotStore
// Dependencies: [19, 6071, 560, 504, 2]
// Exports: useShareVoicePanelDockState, useVoicePanelDockState

// Module 14855 (VoicePanelDockSlotStore)
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dockState;

let closure_4 = module_560.create(() => ({ dockState: null }));
const context = react.createContext(false);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSlotStore.tsx");

export function useShareVoicePanelDockState(channelId) {
  _require = channelId;
  channelId = channelId.channelId;
  let obj = require("get initialized");
  const items = [RTCConnectionStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => RTCConnectionStore.getChannelId() === channelId, items1);
  const items2 = [channelId, stateFromStores];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = { dockState };
      closure_4.setState(obj);
    }
  }, items2);
  const items3 = [channelId];
  const layoutEffect1 = stateFromStores.useLayoutEffect(() => () => {
    dockState = closure_2_4.getState().dockState;
    channelId = undefined;
    const obj = closure_2_4;
    if (dockState != null) {
      channelId = dockState.channelId;
    }
    if (channelId === closure_1_1) {
      obj.setState({ dockState: null });
    }
  }, items3);
}
export const VoicePanelDockHiddenContext = context;
export function useVoicePanelDockState() {
  return closure_4((dockState) => dockState.dockState);
}
