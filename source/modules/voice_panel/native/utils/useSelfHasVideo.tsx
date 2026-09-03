// Module ID: 16921
// Function ID: 16922
// Name: useSelfHasVideo
// Dependencies: [4494, 1215, 4529, 586, 9608, 2]
// Exports: default

// Module 16921 (useSelfHasVideo)
import closure_2 from "getParticipants" /* 4494 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "_detectH265HardwareDecode" /* 4529 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  return _require(586).useStateFromStores(items, () => {
    const participant = closure_1_2.getParticipant(callback, closure_1_3.getId());
    return callback(closure_1_1[4]).canRenderParticipantVideo(participant, closure_1_4);
  });
};
