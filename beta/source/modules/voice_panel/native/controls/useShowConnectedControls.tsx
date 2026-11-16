// Module ID: 20106
// Function ID: 20107
// Name: useShowConnectedControls
// Dependencies: [19, 19231, 11984, 11253, 2]
// Exports: default

// Module 20106 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 11253 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 19231 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/controls/useShowConnectedControls.tsx");

export default function useShowConnectedControls(arg0) {
  let connected;
  let dockJoinMorphOrigin;
  let isDockEnabled;
  let tmp = useIsConnectedToVoiceChannelDefault(arg0);
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ connected, isDockEnabled, dockJoinMorphOrigin } = context);
  let tmp3 = useStateFromSharedValueDefault(connected);
  if (isDockEnabled) {
    if (tmp3) {
      tmp3 = null == useStateFromSharedValueDefault(dockJoinMorphOrigin);
    }
    tmp = tmp3;
  }
  return tmp;
};
