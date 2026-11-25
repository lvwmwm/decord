// Module ID: 19389
// Function ID: 19390
// Name: useSelfHasVideo
// Dependencies: [6902, 502, 2131, 504, 10114, 2]
// Exports: default

// Module 19389 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 10114 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6902 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canRenderParticipantVideo = participantHasVideo.canRenderParticipantVideo;
    participantHasVideo;
    const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
    return canRenderParticipantVideo(participant, MediaEngineStore);
  });
};
