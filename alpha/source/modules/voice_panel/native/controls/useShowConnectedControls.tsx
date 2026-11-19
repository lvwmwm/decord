// Module ID: 19421
// Function ID: 19422
// Name: useShowConnectedControls
// Dependencies: [19, 18083, 11687, 10536, 2]
// Exports: default

// Module 19421 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10536 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11687 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 18083 */;
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
