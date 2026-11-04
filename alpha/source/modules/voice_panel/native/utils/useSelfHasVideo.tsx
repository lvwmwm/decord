// Module ID: 19475
// Function ID: 19476
// Name: useSelfHasVideo
// Dependencies: [6978, 502, 2135, 504, 11416, 2]
// Exports: default

// Module 19475 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 11416 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
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
