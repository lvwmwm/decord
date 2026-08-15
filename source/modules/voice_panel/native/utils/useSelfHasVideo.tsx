// Module ID: 16304
// Function ID: 16305
// Name: useSelfHasVideo
// Dependencies: [4773, 1218, 4497, 589, 11444, 2]
// Exports: default

// Module 16304 (useSelfHasVideo)
import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";

const require = arg1;
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/voice_panel/native/utils/useSelfHasVideo.tsx");

export default function useSelfHasVideo(arg0) {
  const _require = arg0;
  const items = [getParticipants, fetchFingerprint, _detectH265HardwareDecode];
  return _require(589).useStateFromStores(items, () => {
    const participant = outer1_2.getParticipant(callback, outer1_3.getId());
    return callback(outer1_1[4]).canRenderParticipantVideo(participant, outer1_4);
  });
};
