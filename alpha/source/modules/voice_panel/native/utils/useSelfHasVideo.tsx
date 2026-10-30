// Module ID: 19142
// Function ID: 19143
// Name: useSelfHasVideo
// Dependencies: [6837, 502, 2007, 504, 11209, 2]
// Exports: default

// Module 19142 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 11209 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
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
