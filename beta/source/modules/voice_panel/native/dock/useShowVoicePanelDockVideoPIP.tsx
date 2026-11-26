// Module ID: 19337
// Function ID: 19338
// Name: useShowVoicePanelDockVideoPIP
// Dependencies: [6620, 2131, 19336, 504, 10744, 2]
// Exports: default

// Module 19337 (useShowVoicePanelDockVideoPIP)
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import VoicePanelDockPIPWatchPromptStore from "VoicePanelDockPIPWatchPromptStore" /* 19336 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useShowVoicePanelDockVideoPIP.tsx");

export default function useShowVoicePanelDockVideoPIP(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ChannelRTCStore, MediaEngineStore, VoicePanelDockPIPWatchPromptStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let someResult = !VoicePanelDockPIPWatchPromptStore.isVideoPIPDismissed();
    VoicePanelDockPIPWatchPromptStore.isVideoPIPDismissed();
    if (someResult) {
      const videoParticipants = ChannelRTCStore.getVideoParticipants(closure_0);
      someResult = videoParticipants.some((item) => {
        const obj = closure_1_0(closure_1_1[4]);
        return obj.canRenderParticipantVideo(item, closure_1_3);
      });
    }
    return someResult;
  }, items1);
};
