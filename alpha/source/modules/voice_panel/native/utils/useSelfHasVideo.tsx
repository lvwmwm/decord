// Module ID: 17562
// Function ID: 17563
// Name: useSelfHasVideo
// Dependencies: [4773, 502, 1992, 504, 9716, 2]
// Exports: default

// Module 17562 (useSelfHasVideo)
import participantHasVideo from "participantHasVideo" /* 9716 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4773 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

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
