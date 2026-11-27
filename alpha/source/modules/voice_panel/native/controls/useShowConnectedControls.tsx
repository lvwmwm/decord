// Module ID: 19602
// Function ID: 19603
// Name: useShowConnectedControls
// Dependencies: [19, 4892, 18255, 11789, 8620, 504, 2]
// Exports: default

// Module 19602 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8620 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11789 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 18255 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
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
