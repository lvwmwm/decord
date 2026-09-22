// Module ID: 17196
// Function ID: 17197
// Name: useSelfHasVideo
// Dependencies: [4652, 502, 1908, 504, 9752, 2]
// Exports: default

// Module 17196 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 9752 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4652 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  _require = arg0;
  const items = [ChannelRTCStore, AuthenticationStore, MediaEngineStore];
  return require("initialize").useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(closure_0, AuthenticationStore.getId());
    return participantHasVideo.canRenderParticipantVideo(participant, MediaEngineStore);
  });
};
