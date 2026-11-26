// Module ID: 19383
// Function ID: 19384
// Name: useShowConnectedControls
// Dependencies: [19, 4762, 18051, 11754, 10603, 504, 2]
// Exports: default

// Module 19383 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10603 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 18051 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useShowConnectedControls.tsx");

export default function useShowConnectedControls(arg0) {
  let closure_0;
  let connected;
  let dockJoinMorphOrigin;
  let isDockEnabled;
  _require = arg0;
  let tmp = useIsConnectedToVoiceChannelDefault(arg0);
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ connected, isDockEnabled, dockJoinMorphOrigin } = context);
  let stateFromStores = useStateFromSharedValueDefault(connected);
  const items = [ChannelStore];
  const items1 = [arg0];
  const tmp4 = null != useStateFromSharedValueDefault(dockJoinMorphOrigin);
  const obj = require("get initialized");
  if (isDockEnabled) {
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => null != ChannelStore.getChannel(closure_0), items1);
    }
    if (stateFromStores) {
      stateFromStores = !tmp4;
    }
    tmp = stateFromStores;
  }
  return tmp;
};
