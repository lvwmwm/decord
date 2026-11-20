// Module ID: 19241
// Function ID: 19242
// Name: useShowConnectedControls
// Dependencies: [19, 17910, 11629, 10478, 2]
// Exports: default

// Module 19241 (useShowConnectedControls)
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10478 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11629 */;
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17910 */;
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
