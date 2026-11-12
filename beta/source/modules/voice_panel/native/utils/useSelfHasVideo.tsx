// Module ID: 19605
// Function ID: 19606
// Name: useSelfHasVideo
// Dependencies: [6931, 502, 2130, 504, 11400, 2]
// Exports: default

// Module 19605 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 11400 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
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
